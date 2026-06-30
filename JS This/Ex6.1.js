const coffeeShop = {
  beans: 40,
  money: 100, 

  // Upgraded the menu to include both beanRequirement and price
  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 3 },
    doubleShot: { beanRequirement: 15, price: 6 },
    frenchPress: { beanRequirement: 12, price: 4 }
  },

  // Method to buy more beans
  buyBeans: function (numBeans) {
    const costPerBean = 1; 
    const totalCost = numBeans * costPerBean;

    if (this.money < totalCost) {
      console.log("Sorry, we don't have enough money to buy beans!");
      return;
    }

    this.money -= totalCost;
    this.beans += numBeans;
    console.log(`Bought ${numBeans} beans. Money left: ${this.money}`);
  },

  // Updated makeDrink method to work with the new objects
  makeDrink: function (drinkType) {
    if (!(drinkType in this.drinkRequirements)) {
      console.log("Sorry, we don't make " + drinkType);
      return false; 
    }


    const requiredBeans = this.drinkRequirements[drinkType].beanRequirement;
    
    if (this.beans < requiredBeans) {
      console.log("Sorry, we're all out of beans!");
      return false;
    }

    this.beans -= requiredBeans;
    console.log("Here is your " + drinkType + "!");
    return true; // Drink was made successfully
  },

  // Method to buy a drink
  buyDrink: function (drinkType) {
    // We check if the drink exists first before charging the customer
    if (!(drinkType in this.drinkRequirements)) {
      console.log("Sorry, we don't make " + drinkType);
      return;
    }

    // We also check if we have enough beans before taking their money
    const requiredBeans = this.drinkRequirements[drinkType].beanRequirement;
    if (this.beans < requiredBeans) {
      console.log("Sorry, we're all out of beans!");
      return;
    }

    // Increase money depending on the price
    this.money += this.drinkRequirements[drinkType].price;
    
    // Call the makeDrink method to actually make it
    this.makeDrink(drinkType);
  }
};

// Testing 
coffeeShop.buyDrink("latte"); // Money goes up by 5, beans go down by 10
coffeeShop.buyDrink("doubleShot"); 
coffeeShop.buyDrink("frenchPress"); 
coffeeShop.buyDrink("latte"); // Should fail! Not enough beans.

coffeeShop.buyBeans(20); // Spend 20 money to get 20 beans
coffeeShop.buyDrink("latte"); // Now it works again!