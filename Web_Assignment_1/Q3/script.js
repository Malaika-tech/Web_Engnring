document.getElementById("stringForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    let inputString = document.getElementById("inputString").value.trim();
    let rollNumber = document.getElementById("rollNumber").value;
    

    let skipInterval = [...rollNumber].filter(char => /\d/.test(char)) // Get only digits
                                      .map(Number)                     // Convert to numbers
                                      .reduce((sum, num) => sum + num, 0); // Sum them
    
    if (skipInterval === 0) {
        alert("Roll number must contain at least one digit.");
        return;
    }

    let transformedString = reverseWithSkip(inputString, skipInterval);
    
    displayResult(inputString, transformedString);
});

const reverseWithSkip = (str, N) => {
    if (N > str.length) return str;

    let chars = [...str]; 
    let toReverse = chars.map((char, i) => ((i + 1) % N !== 0) ? char : null) 
                         .filter(char => char !== null) 
                         .reverse(); 
    return chars.map((char, i) => ((i + 1) % N === 0) ? char : toReverse.shift()).join("");
};


const displayResult = (original, transformed) => {
    let resultList = document.getElementById("resultList");
    let listItem = document.createElement("li");
    listItem.textContent = `Original: "${original}" → Transformed: "${transformed}"`;
    resultList.prepend(listItem);
};
