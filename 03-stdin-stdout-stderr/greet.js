const { stdin, stdout, stderr } = process;

stdout.write("What's your name?\n");
stdin.on('data', (data) => {
  stdout.write('Hi, ');
  stdout.write(`${data}!`.replace(/\n/, '') + '\n');
  process.exit();
});

process.on('exit', () => stdout.write('Good luck!\n'));
