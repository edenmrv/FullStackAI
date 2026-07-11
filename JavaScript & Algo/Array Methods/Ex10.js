let cartItems = [
  { name: "T-shirt", price: 19.99, category: "clothing", quantity: 2 },
  { name: "Laptop", price: 1299.99, category: "electronics", quantity: 1 },
  { name: "Coffee Beans", price: 12.99, category: "food", quantity: 3 },
  { name: "Headphones", price: 89.99, category: "electronics", quantity: 1 },
  { name: "Jeans", price: 59.99, category: "clothing", quantity: 1 }
];

let taxRates = {
  clothing: 0.08,
  electronics: 0.10,
  food: 0.05
};

const finalTotalCost = cartItems.reduce((total, item) => {

  const baseCost = item.price * item.quantity;
  const taxRate = taxRates[item.category];
  const taxAmount = baseCost * taxRate;
  return total + baseCost + taxAmount;
  
}, 0); 

console.log(finalTotalCost); 
