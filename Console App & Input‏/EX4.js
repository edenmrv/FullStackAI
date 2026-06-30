const prompt = require('prompt-sync')();
// start point
let balance = 100;
let isRunning = true;

while (isRunning) {
    console.log("\n=== Banking System ===");
    console.log("1) Check Balance");
    console.log("2) Deposit Money");
    console.log("3) Withdraw Money");
    console.log("4) Exit");

    let choice = prompt("Choose option (1-4): ");

    if (choice === '1') {
        console.log(`Current balance: $${balance}`);
        
    } else if (choice === '2') {
        let amount = Number(prompt("Enter amount to deposit: $"));
        if (!isNaN(amount) && amount > 0) {
            balance += amount;
            console.log(`New balance: $${balance}`);
        } else {
            console.log("Error: Please enter a valid positive number.");
        }
        
    } else if (choice === '3') {
        let amount = Number(prompt("Enter amount to withdraw: $"));
        if (!isNaN(amount) && amount > 0) {
            if (amount <= balance) {
                balance -= amount;
                console.log(`New balance: $${balance}`);
            } else {
                console.log("Error: Insufficient funds.");
            }
        } else {
            console.log("Error: Please enter a valid positive number.");
        }
        
    } else if (choice === '4') {
        console.log("Goodbye!");
        isRunning = false; // 
        
    } else {
        console.log("Invalid choice. Please select an option between 1 and 4.");
    }
}