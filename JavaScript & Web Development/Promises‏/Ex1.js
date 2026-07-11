function checkLuckyNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {  
      // Handle the error case 
      if (num <= 0) {
        reject(new Error("Invalid number"));
      } 
      // Check if it's lucky (divisible by 7 with no remainder)
      else if (num % 7 === 0) {
        resolve("Lucky!");
      } 
      // Otherwise, its just a regular positive number
      else {
        resolve("Not lucky");
      }
      
    }, 800); 
  });
}

// Test Case 1: A Lucky Number (14)
checkLuckyNumber(14)
  .then((result) => {
    console.log(`Testing 14: ${result}`); // Prints: "Testing 14: Lucky!"
  })
  .catch((error) => {
    console.log(error.message);
  });

// Test Case 2: A Regular Positive Number (10)
checkLuckyNumber(10)
  .then((result) => {
    console.log(`Testing 10: ${result}`); // Prints: "Testing 10: Not lucky"
  })
  .catch((error) => {
    console.log(error.message);
  });

// Test Case 3: An Invalid Number (-5)
checkLuckyNumber(-5)
  .then((result) => {
    console.log(result); 
  })
  .catch((error) => {
    console.log(`Testing -5: ${error.message}`); // Prints: "Testing -5: Invalid number"
  });