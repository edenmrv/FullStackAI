const findDuplicates = function(arr) {
  const seenNumbers = {}; 

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];

    if (seenNumbers[currentNumber]) {
      console.log("there is a duplicate");
      return; 
    }
    seenNumbers[currentNumber] = true;
  }
};


findDuplicates([1, 2, 3, 4, 5]);    
findDuplicates([1, 2, 3, 2, 5]);    // print "there is a duplicate"