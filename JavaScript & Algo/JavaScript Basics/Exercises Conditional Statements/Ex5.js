let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday, 1 = Monday, etc.

let discount = 0;

if (customerType === "vip") {
  discount = 20;
} else if (customerType === "premium") {
  discount = (dayOfWeek === 0 || dayOfWeek === 6) ? 15 : 10;
} else if (customerType === "regular") {
  discount = purchaseAmount > 100 ? 10 : (purchaseAmount > 50 ? 5 : 0);
}

console.log("Your discount is " + discount + "%");