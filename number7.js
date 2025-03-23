const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, m, arr;

rl.on('line', (input) => {
    if (!n) {
        [n, m] = input.split(' ').map(Number);
    } else {
        arr = input.split(' ').map(Number);
        let results = [];
        
        for (let i = 1; i <= n; i++) {
            let sum = 0;

            for (let j = 0; j < arr.length; j++) {
                for (let k = j + 1; k < arr.length; k++) {
                    let pairSum = arr[j] + arr[k];
                    sum += Math.pow(pairSum, i);
                }
            }

            results.push(sum);
        }

        results.forEach(result => console.log(result));
        rl.close();
    }
});
