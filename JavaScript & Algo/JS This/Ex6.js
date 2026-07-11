const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    if (!(drinkType in this.drinkRequirements)) {
      console.log("Sorry, we don't make " + drinkType);
      return; 
    }

    const requiredBeans = this.drinkRequirements[drinkType];
    
    if (this.beans < requiredBeans) {
      console.log("Sorry, we're all out of beans!");
      return; 
    }

    this.beans -= requiredBeans;
  }
};

// Testing the code
coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano"); 
coffeeShop.makeDrink("filtered"); 
coffeeShop.makeDrink("doubleShot"); 
coffeeShop.makeDrink("frenchPress"); 