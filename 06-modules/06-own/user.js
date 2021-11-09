const user = {
  name: 'John',
  age: 23,
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  },
};

module.exports = user;

// module.exports = {
//   name: 'Ann',
//   age: 23,
//   sayHi() {
//       console.log(`Hi! My name is ${this.name}`);
//   }
// };