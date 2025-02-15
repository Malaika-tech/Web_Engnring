let accountNumber = "";
let balance = 0;
let rollNUmber = "";
let transactions = [];

const initializeAccount = ()=>{
    rollInput  = document.getElementById("rollNumber").value.trim();
    if(!/^\d+$/.test(rollInput)){
        alert("Please enter a valid rollNumber!!!");
        return;
    }

    rollNumber=rollInput
    accountNumber = "ACC" + rollNumber;
    balance = (parseInt(rollNumber.slice(-1))||1)*1000;
    document.getElementById("accountNumber").innerText=accountNumber;
    document.getElementById("balance").innerText=balance;

    document.getElementById("accountDetails").classList.remove("hidden");
    document.getElementById("transactionSection").classList.remove("hidden");

    transactions=[{type:"Initial Deposit", amount: balance}];
    updateTransactionHistory();
};

const deposit = ()=>{
    let amount = parseInt(document.getElementById("amount").value);
    if(!amount || amount<=0 || amount % parseInt(rollNumber) !==0){
        alert("Deposit amount must be a multiple of your roll number...");
        return;
    }

    balance+=amount;
    transactions.push({type:"Depost", amount});
    updateTransactionHistory();
};
const withdraw = ()=>{
    let amount = parseInt(document.getElementById("amount").value);
    if((!amount || amount<=0)){
        alert("cannot withdraw this amount. enter valid amount");
        return ;
    }
    let maxWithdrawBal = balance*0.8;
    if(amount>maxWithdrawBal){
        alert(`You can only withdraw up to 80% of your balance (PKR ${maxWithdrawBal}).`);
        return;
    }
    balance= balance - amount;
    transactions.push({type:"Withdraw", amount});
    updateTransactionHistory();

};
// Update Transaction History & Balance
const updateTransactionHistory = () => {
    balance = transactions.reduce((total, t) => total + (t.type === "Deposit" ? t.amount : t.type === "Withdraw" ? -t.amount:0), 0);
    document.getElementById("balance").innerText=balance;
    let historyList = document.getElementById("transactionHistory");
    historyList.innerHTML = "";
    transactions.forEach((t, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}. ${t.type}: PKR ${t.amount}`;
        historyList.prepend(li);
    });
};
const downloadHistory = () => {
    let text = "Transaction History:\n";
    transactions.forEach((t, index) => {
        text += `${index + 1}. ${t.type}: PKR ${t.amount}\n`;
    });

    let blob = new Blob([text], { type: "text/plain" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "transaction_history.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};