const users = require('./users.json');
const printUserInfo = function(user) {
  console.log(`${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}`);
};

users.forEach(printUserInfo);