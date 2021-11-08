const { stdin, stdout, stderr } = process;
// stdout.write('Node.js\n');

// stdin.on('data', (data) => stdout.write(data));

// process.on('exit', () => stdout.write('Good luck to learning Node.js\n'));

process.on('exit', (code) => {
  if (!code) {
    stdout.write(`Ok! Code: ${code}\n`);
  } else {
    stderr.write(`Something went wrong. Code: ${code}`);
  }
});
