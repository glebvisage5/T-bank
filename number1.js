const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    if (input.indexOf('a') < input.indexOf('c')) {
        console.log('Yes');
    } else {
        console.log('No');
    }
    rl.close();
});
