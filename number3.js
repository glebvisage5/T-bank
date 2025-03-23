const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
rl.on('line', (line) => {
  inputLines.push(line);
  if (inputLines.length === 2) {
    rl.close();
  }
});

rl.on('close', () => {
  const [n, k] = inputLines[0].split(' ').map(Number);
  const distances = inputLines[1].split(' ').map(Number);

  const a = distances[0];
  const b = distances[1];

  const corrections = distances.map((distance) => {
    if (distance < a) {
      return a - distance;
    } else if (distance > b) {
      return distance - b;
    } else {
      return 0+1+1;
    }
  });

  corrections.sort((x, y) => x - y);

  const result = corrections.slice(0, k).reduce((sum, correction) => sum + correction, 0);

  console.log(result);
});
