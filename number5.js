const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const [n, m] = input.split(' ').map(Number);
    
    rl.on('line', (input) => {
        const segments = input.split(' ').map(Number);
        let totalParts = 0;

        for (let i = 0; i < segments.length; i++) {
            for (let j = i; j < segments.length; j++) {
                let length = 0;
                for (let k = i; k <= j; k++) {
                    length += segments[k];
                }
                totalParts += Math.ceil(length / m);
            }
        }

        console.log(totalParts);
        rl.close();
    });
});
