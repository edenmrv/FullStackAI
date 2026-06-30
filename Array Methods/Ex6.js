const users = require('./users.json');
const targetUser = users.find(user => user.address.suite === "Apt. 950");

console.log(targetUser.company.name);