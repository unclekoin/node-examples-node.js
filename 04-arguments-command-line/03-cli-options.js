const protoObj = {
  sayHi() {
      console.log('Hi!');
  }
};

const obj = {};
obj.__proto__ = protoObj;
obj.sayHi();

// node --disable-proto=throw 03-cli-options // Error: Accessing Object.prototype.__proto__ has been disallowed with --disable-proto=throw

// more information: https://nodejs.org/dist/latest-v14.x/docs/api/cli.html#cli_options