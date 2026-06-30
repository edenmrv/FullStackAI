const users = require('./users.json');
const zipStartsWith5IDs = users
  .filter(user => user.address.zipcode.startsWith("5"))
  .map(user => user.id);

console.log(zipStartsWith5IDs); // Output: [ 3, 4, 7 ]