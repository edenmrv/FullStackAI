// Exercise 1

const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
];

const capitalize = function(str) {
  let capitalizedStr = "";
  capitalizedStr += str[0].toUpperCase();
  capitalizedStr += str.slice(1);
  return capitalizedStr;
};

const getAge = function(age) {
  if (age < 21) {
    return "Underage";
  } else if (age > 55) {
    return "55+";
  } else {
    return age + " year old";
  }
};

const capitalizeProfession = function(profession) {
  const words = profession.split(" ");
  let capitalizedProfession = "";
  for (let i = 0; i < words.length; i++) {
    capitalizedProfession += capitalize(words[i]) + " ";
  }
  return capitalizedProfession.trim();
};

const getLocation = function(city, country) {
  return capitalize(city) + ", " + capitalize(country);
};

const capitalizeCatchphrase = function(catchphrase) {
  return '"' + capitalize(catchphrase) + '"';
};

const getSummary = function(person) {
  let summary = "";
  summary += capitalize(person.name);
  summary += ` is a ${getAge(person.age)} `;
  summary += capitalizeProfession(person.profession);
  summary += ` from ${getLocation(person.city, person.country)}. `;
  summary += `${capitalize(person.name)} loves to say ${capitalizeCatchphrase(person.catchphrase)}.`;
  return summary;
};

for (let i = 0; i < people_info.length; i++) {
  console.log(getSummary(people_info[i]));
}

// Exercise 2

const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until that happened, the fire caused a heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];
const wordCounts = {};

const cleanText = function(text) {
  let cleanedText = text.toLowerCase();
  for (let i = 0; i < specialChars.length; i++) {
    cleanedText = cleanedText.split(specialChars[i]).join("");
  }
  return cleanedText.split(" ");
};

const addToCounter = function(word) {
  if (wordCounts[word]) {
    wordCounts[word]++;
  } else {
    wordCounts[word] = 1;
  }
};

const countWords = function(text) {
  const words = cleanText(text);
  for (let i = 0; i < words.length; i++) {
    addToCounter(words[i]);
  }
};

countWords(story);
console.log(wordCounts);