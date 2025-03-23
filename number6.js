const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
let points = [];

rl.on('line', (input) => {
    if (!n) {
        n = parseInt(input.trim());
    } else {
        const [x, y] = input.split(' ').map(Number);
        points.push({ x, y });

        if (points.length === n) {
            let count = 0;
            let used = new Array(n).fill(false);

            for (let i = 0; i < n - 2; i++) {
                for (let j = i + 1; j < n - 1; j++) {
                    for (let k = j + 1; k < n; k++) {
                        const p1 = points[i];
                        const p2 = points[j];
                        const p3 = points[k];

                        const det = p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y);

                        if (det !== 0) {
                            if (!used[i] && !used[j] && !used[k]) {
                                used[i] = used[j] = used[k] = true;
                                count++;
                            }
                        }
                    }
                }
            }

            console.log(count);
            rl.close();
        }
    }
});
