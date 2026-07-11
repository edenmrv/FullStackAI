const users = require('./users.json');
const allLiveInSouthChristy = users.every(user => user.address.city === "South Christy");

console.log(allLiveInSouthChristy);