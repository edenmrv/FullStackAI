const users = require('./users.json');
const mappedUsers = users.map(user => ({
  email: user.email,
  companyName: user.company.name
}));

console.log(mappedUsers);