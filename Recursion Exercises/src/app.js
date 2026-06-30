/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

///Exercise 1
const findFactorial = function(number) {
  //Your code here
  if (number < 0) { return null;}
  if (number === 0 || number === 1) {
    return 1;
  }
  return number * findFactorial(number - 1);
};

//Exercise 2
const reverseString = function(string) {
  //Your code here  
  if (string === ""){
    return "";
  }
  return reverseString(string.slice(1)) + string[0];
};
//Exercise 3
const arr1 = [1, 2, 3];
const arr2 = [];

const swap = function(arr1, arr2) {
  //Your code here
  if (arr1.length === 0) {
    return;
  }
  arr2.push(arr1.shift());
  return swap(arr1, arr2); 
}

//Extension
const stack1 = [1, 2, 3];
const stack2 = [];

const swapExtenstion = function(stack1, stack2) {
  if (stack1.length === 0) {
    return;
  }
  const temp = stack1.pop();
  swapExtenstion(stack1, stack2);
  stack2.push(temp);
};
// swapExtenstion(stack1, stack2);
// console.log(stack1); // Output: []
// console.log(stack2); // Output: [1, 2, 3]
/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }