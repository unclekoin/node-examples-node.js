const { stdin, stdout } = process;

const action = process.argv[2];

console.log(action);

stdout.write('Enter two numbers:\n');
stdout.write('> ');
stdin.on('data', (data) => {
  const nums = data.toString().split(' ');
  const a = Number(nums[0]);
  const b = Number(nums[1]);
  let result;

  switch (action) {
    case '-m':
      result = `a x b = ${(a * b).toString()}`;
      break;
    case '-s':
      result = `a + b = ${(a + b).toString()}`;
      break;
    default:
      result = "Wrong flag!"
  }
  stdout.write(result + '\n');
  exit();
});
