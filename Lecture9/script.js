let totalBalance = parseFloat(localStorage.getItem("totalBalance")) || 0;
let debitBalance = parseFloat(localStorage.getItem("debitBalance")) || 0;
let creditBalance = parseFloat(localStorage.getItem("creditBalance")) || 0;
const transactions = document.getElementById("transactions");

// Function to load transactions from localStorage
function loadTransactions() {
    const savedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    transactions.innerHTML = ""; // Clear previous items
    savedTransactions.forEach(transaction => {
        transactions.innerHTML += `<li style="color:${transaction.color};">${transaction.text}</li>`;
    });
}

// Function to update balances in the UI
function updateBalances() {
    document.getElementById("totalBalance").innerText = totalBalance;
    document.getElementById("debitBalance").innerText = debitBalance;
    document.getElementById("creditBalance").innerText = creditBalance;
}

// Function to save transactions and balances to localStorage
function saveToLocalStorage() {
    const savedTransactions = Array.from(transactions.children).map(li => ({
        text: li.innerHTML,
        color: li.style.color
    }));
    localStorage.setItem("transactions", JSON.stringify(savedTransactions));
    localStorage.setItem("totalBalance", totalBalance);
    localStorage.setItem("debitBalance", debitBalance);
    localStorage.setItem("creditBalance", creditBalance);
}

function addTransaction(type) {
    const source = document.getElementById("source").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (!source || isNaN(amount) || amount <= 0) {
        alert("Please enter valid details.");
        return;
    }

    let transactionText;
    let transactionColor;

    if (type === "debit") {
        totalBalance -= amount;
        debitBalance += amount;
        transactionText = `Spent on ${source}: -$${amount}`;
        transactionColor = "red";
    } else {
        totalBalance += amount;
        creditBalance += amount;
        transactionText = `Income from ${source}: +$${amount}`;
        transactionColor = "green";
    }

    transactions.innerHTML += `<li style="color:${transactionColor};">${transactionText}</li>`;

    // Update balances in the UI
    updateBalances();

    // Save to localStorage
    saveToLocalStorage();

    // Clear input fields
    document.getElementById("source").value = "";
    document.getElementById("amount").value = "";
}

// Load transactions on page load
window.onload = function () {
    loadTransactions();
    updateBalances();
};
