const { stdin, stdout } = process;

/*
stdin.on('data', (data) => {
  stdout.write('Message in uppercase:');
  stdout.write(data.toUpperCase()); // TypeError: data.toUpperCase is not a function
});
*/

const myBuffer = Buffer.from('Hi, Node.js!', 'utf-8');
console.log(myBuffer); // <Buffer 48 69 2c 20 4e 6f 64 65 2e 6a 73 21>

const bufferStringified = myBuffer.toString();
console.log(bufferStringified)

stdin.on('data', (data) => {
  stdout.write('Message in uppercase:\n');
  stdout.write(data.toString().toUpperCase());
  process.exit();
})