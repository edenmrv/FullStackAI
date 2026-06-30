const inventory = {
  'laptop': { price: 999, stock: 5 },
  'mouse': { price: 25, stock: 10 },
  'keyboard': { price: 75, stock: 0 },
  'monitor': { price: 299, stock: 3 }
};

function checkInventory(items) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Check if every item exists and is in stock
      for (const item of items) {
        if (!inventory[item]) {
          return reject(new Error(`Item '${item}' does not exist in inventory.`));
        }
        if (inventory[item].stock <= 0) {
          return reject(new Error(`Item '${item}' is currently out of stock.`));
        }
      }
      // If the loop finishes without returning/rejecting, everything is in stock!
      resolve(items);
    }, 500);
  });
}

function calculateTotal(items) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Calculate subtotal by looking up the price of each item
      const subtotal = items.reduce((sum, item) => sum + inventory[item].price, 0);
      const tax = subtotal * 0.08;
      const total = subtotal + tax;
      
      resolve({ subtotal, tax, total });
    }, 200);
  });
}

function processPayment(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 90% success rate
      if (Math.random() < 0.90) {
        // Generate a fake transaction ID
        const transactionId = 'TXN-' + Math.floor(Math.random() * 1000000);
        resolve({ transactionId, amount, status: 'success' });
      } else {
        reject(new Error("Payment processing failed. Please try your card again."));
      }
    }, 1500);
  });
}

function updateInventory(items) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Reduce stock for each purchased item
      items.forEach(item => {
        inventory[item].stock -= 1;
      });
      resolve("Inventory updated successfully");
    }, 300);
  });
}

// THE COMPLETE CHECKOUT FLOW
function checkout(itemNames) {
  console.log(`\n🛒 Starting checkout for: ${itemNames.join(', ')}...`);
  
  // Return the promise chain so the caller can use .then() and .catch()
  return checkInventory(itemNames)
    .then((validItems) => {
      console.log("✓ Inventory check passed.");
      return calculateTotal(validItems);
    })
    .then((totals) => {
      console.log(`✓ Total calculated: $${totals.total.toFixed(2)} (Subtotal: $${totals.subtotal}, Tax: $${totals.tax.toFixed(2)})`);
      return processPayment(totals.total);
    })
    .then((paymentReceipt) => {
      console.log(`✓ Payment successful! (TXN: ${paymentReceipt.transactionId})`);
      
      // Update inventory, but wait for it to finish before finalizing the order
      return updateInventory(itemNames).then(() => {
        console.log("✓ Inventory levels adjusted.");
        return {
          status: 'Complete',
          items: itemNames,
          receipt: paymentReceipt
        };
      });
    });
}

// Test

checkout(['laptop', 'mouse'])           
  .then(result => console.log('✅ Order success:', result))
  .catch(error => console.log('❌ Order failed:', error.message));

checkout(['laptop', 'keyboard'])        
  .then(result => console.log('✅ Order success:', result))
  .catch(error => console.log('❌ Order failed:', error.message));

checkout(['monitor', 'mouse', 'laptop']) 
  .then(result => console.log('✅ Order success:', result))
  .catch(error => console.log('❌ Order failed:', error.message));