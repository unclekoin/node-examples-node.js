const { stdout, argv, exit } = process;

const result =
  argv[2] === '-d'
    ? __dirname
    : argv[2] === '-f'
    ? __filename
      : 'Try use flag -d or -f';
    
stdout.write(result + '\n');
exit();
