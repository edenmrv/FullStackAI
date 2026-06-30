const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter your name: ', (name) => {
    rl.question('Enter your email: ',(email) => {
        rl.question('Enter your age: ', (age) => {
            rl.question('Enter your favorite color: ', (color) => {

                console.log('\nRegistration Summary:');
                console.log(`Name: ${name}`);
                console.log(`Email: ${email}`);
                console.log(`Age: ${age}`);
                console.log(`Favorite Color: ${color}`);
                
                rl.close();
            });
        });
    });
});