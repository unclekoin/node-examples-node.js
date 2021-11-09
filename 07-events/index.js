const EventEmitter = require('events');

const emitter = new EventEmitter();
// 1.
// emitter.on('start', () => console.log('Start!'));
// emitter.emit('start');

// 2.
// emitter.on('start', (message) => console.log(message));
// emitter.emit('start', 'Hello, World!');

// 3.
// emitter.on('start', (a, b) => console.log(a, b));
// emitter.emit('start', 3, 5);

// 4.
// const handler1 = () => console.log('Handler 1');
// const handler2 = () => console.log('Handler 2');

// emitter.on('start', handler1);
// emitter.on('start', handler2);
// emitter.emit('start');

// 5. prependListener
// const handler1 = () => console.log(1);
// const handler2 = () => console.log(2);
// const handler3 = () => console.log(3);
// const handler4 = () => console.log(4);

// emitter.on('start', handler1);
// emitter.on('start', handler2);
// emitter.on('start', handler3);
// emitter.prependListener('start', handler4);

// emitter.emit('start'); // 4 1 2 3

// 6.
// const handler = () => console.log(47);
// emitter.on('start', handler);
// emitter.on('start', handler);
// emitter.on('start', handler);

// emitter.emit('start');

// 7.
// const handler = (msg) => console.log(msg);
// emitter.on('start', handler);

// emitter.emit('start', 'Hello');
// emitter.emit('start', 'form');
// emitter.emit('start', 'Node.js');

// 8. once
// const handler = (msg) => console.log(msg);
// emitter.once('start', handler);

// emitter.emit('start', 'Hello');
// emitter.emit('start', 'form');
// emitter.emit('start', 'Node.js');

// 9. emitter.off or removeEventListener
// const handler = (msg) => console.log(msg);

// emitter.on('start', handler);

// emitter.emit('start', 'Hello');
// emitter.off('start', handler);

// emitter.emit('start', 'form');
// emitter.emit('start', 'Node.js');

// 10. Own class extends EventEmitter
class User extends EventEmitter {
  constructor(name, password) {
    super();
    this.name = name;
    this.password = password;
  }

  sayHi() {
    console.log(`Hi! My name is ${this.name}!`);
  }
}

const user = new User('John', '12345-12345');
user.on('greetings', user.sayHi);

user.emit('greetings');