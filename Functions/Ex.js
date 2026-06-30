// Exercise 1
function isEven(number) {
  // Check if the number is divisible by 2 with no remainder
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Exercise 2
function printOddNumbers(numbersArray) {
  // loop through the array of numbers
  for (let i = 0; i < numbersArray.length; i++) {
    let currentNumber = numbersArray[i];
    
    // use the function from Exercise 1 to check if it's NOT even
    if (isEven(currentNumber) === false) {
      console.log(currentNumber);
    }
  }
}
// Exercise 3
function checkExists(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
}

// Exercise 4
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};

// Exercise 5
const increaseByNameLength = function(money, name) {
  return money * name.length;
};

const makeRegal = function(name) {
  return "His Royal Highness, " + name;
};

const turnToKing = function(name, money) {
  name = name.toUpperCase();
  money = increaseByNameLength(money, name);
  name = makeRegal(name);
  console.log(name + " has " + money + " gold coins");
};

// Exercise 6
// loop through all 3-digit numbers
for (let i = 100; i <= 999; i++) {
  // convert to string to get each digit easily
  let numStr = String(i);
  let d1 = Number(numStr[0]);
  let d2 = Number(numStr[1]);
  let d3 = Number(numStr[2]);
  
  // calculate the sum of cubes
  let sum = (d1 * d1 * d1) + (d2 * d2 * d2) + (d3 * d3 * d3);
  
  if (sum === i) {
    console.log(i);
  }
}