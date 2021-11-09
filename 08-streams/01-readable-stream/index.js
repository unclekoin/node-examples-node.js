const fs = require('fs');
const stream = fs.createReadStream('source.txt', 'utf-8');

// for (let i = 0; i < 10000; i++) {
//   const data = 'Lorem ipsum\n';
//   fs.appendFile('source.txt', data, (error) => {
//     if (error) return console.error(error.message);
//     console.log('Ok!');
//   });
// }

let data = '';
// stream.on('data', (chunk) => console.log(chunk.length));
stream.on('data', (chunk) => (data += chunk));
stream.on('end', () => console.log('End\n', data.slice(0, 100)));
stream.on('error', (error) => console.error('Error:', error.message));
