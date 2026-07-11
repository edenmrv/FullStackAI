const users = require('./users.json');
const namesStartingWithC = users
  .map(user => user.name)
  .filter(name => name.startsWith("C"));

console.log(namesStartingWithC);