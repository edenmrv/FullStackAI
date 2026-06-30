const getTime = function (callback) {
    const time = new Date();
    callback(time);
};

const returnTime = function (time) {
  console.log('The current time is: ' + time)
};
getTime(returnTime);
