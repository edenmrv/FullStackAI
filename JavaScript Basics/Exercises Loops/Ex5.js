const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
};

// get all the letters from the dictionary
const keys = Object.keys(dictionary);

for (let i = 0; i < keys.length; i++) {
  let letter = keys[i];
  console.log("Words that begin with " + letter + ":");
  
  // double for loop - get the words for the current letter
  let words = dictionary[letter];
  
  for (let j = 0; j < words.length; j++) {
    console.log("  " + words[j]); 
  }
}