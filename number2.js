const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let days;
let budgets = [];

rl.on('line', (input) => {
    if (!days) {
        days = parseInt(input);
    } else {
        budgets.push(parseInt(input));

        if (budgets.length === days) {
            const maxExponent = 30;

            const prices = [];
            for (let i = 0; i <= maxExponent; i++) {
                prices.push(Math.pow(2, i));
            }

            budgets.forEach(budget => {
                let maxCost = -1;

                for (let i = 0; i < prices.length - 2; i++) {
                    for (let j = i + 1; j < prices.length - 1; j++) {
                        for (let k = j + 1; k < prices.length; k++) {
                            const totalCost = prices[i] + prices[j] + prices[k];
                            if (totalCost <= budget) {
                                maxCost = Math.max(maxCost, totalCost);
                            }
                        }
                    }
                }

                console.log(maxCost);
            });

            rl.close();
        }
    }
});
