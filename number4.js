const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function minOperationsToMakeMultiple(x, arr) {
    let minOperations = Infinity;
    
    arr.forEach(num => {
        let remainder = num % x;
        if (remainder === 0) {
            minOperations = 0;
        } else {
            minOperations = Math.min(minOperations, x - remainder);
        }
    });

    return minOperations;
}

rl.on('line', (input) => {
    const [x1, x2, x3, n] = input.split(' ').map(Number);

    rl.on('line', (input) => {
        const arr = input.split(' ').map(Number);

        const operationsX1 = minOperationsToMakeMultiple(x1, arr);
        const operationsX2 = minOperationsToMakeMultiple(x2, arr);
        const operationsX3 = minOperationsToMakeMultiple(x3, arr);

        const totalOperations = operationsX1 + operationsX2 + operationsX3;

        console.log(totalOperations);

        rl.close();
    });
});
