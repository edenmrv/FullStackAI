const date = 3;

const kitchen = {
  owner: "Geraldine",
  hasOven: true,
  fridge: {
    price: 500,
    works: false,
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "radish", expiryDate: 2 },
      { name: "bread", expiryDate: 1 }
    ]
  }
};

const hasOven = kitchen.hasOven;
const works = kitchen.fridge.works;
const owner = kitchen.owner;
const itemName = kitchen.fridge.items[1].name;
const daysExpired = date - kitchen.fridge.items[1].expiryDate;
const repairCost = kitchen.fridge.price / 2;

if (hasOven && works) {
  console.log(owner + "'s " + itemName + " expired " + daysExpired + " day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the " + itemName + " in.");
} else if (!hasOven && works) {
  console.log(owner + "'s " + itemName + " expired " + daysExpired + " day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the " + itemName + " in.");
} else if (hasOven && !works) {
  console.log(owner + "'s " + itemName + " expired " + daysExpired + " day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the " + itemName + " in. And she'll have to pay " + repairCost + " to fix the fridge.");
} else if (!hasOven && !works) {
  console.log(owner + "'s " + itemName + " expired " + daysExpired + " day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the " + itemName + " in. And she'll have to pay " + repairCost + " to fix the fridge.");
}