const { stdin, stdout } = process;

stdout.write("What's your name?\n");

stdin.on('data', (data) => {
  stdout.write(data.toString().split('').reverse().join('') + '\n');
  process.exit();
});

