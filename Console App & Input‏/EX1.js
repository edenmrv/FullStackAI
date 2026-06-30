const [num1, op, num2] = process.argv.slice(2);
const a = Number(num1);
const b = Number(num2);

let result;

if (op === '+') result = a + b;
else if (op === '-') result = a - b;
else if (op === '*') result = a * b;
else if (op === '/') result = a / b;
else {
    console.log("Invalid operation!");
    process.exit(1);
}

console.log(`${a} ${op} ${b} = ${result}`);