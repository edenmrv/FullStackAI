const users = require('./users.json');
const zipStartsWith5 = users.filter(user => user.address.zipcode.startsWith("5"));

console.log(zipStartsWith5);