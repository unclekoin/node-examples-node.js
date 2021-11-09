const fs = require('fs');

const input = fs.createReadStream('../01-readable-stream/source.txt', 'utf-8');
const output = fs.createWriteStream('destination.txt');

input.on('data', (chunk) => output.write(chunk));
input.on('error', (error) => console.error('Error:', error.message));
