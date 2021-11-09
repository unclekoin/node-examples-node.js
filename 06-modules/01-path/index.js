const path = require('path');

// Get data about file
console.log(path.basename(__filename)); // index.js
console.log(path.dirname(__filename)); // /Users/.../06-modules/01-path
console.log(path.extname(__filename)); // .js
console.log(path.parse(__filename));
/*
{
  root: '/',
  dir: '/Users/.../node-js/06-modules/01-path',
  base: 'index.js',
  ext: '.js',
  name: 'index'
}
*/

// Paths concatenation
console.log(path.join(__dirname, 'test', 'second.html'));
// /Users/.../06-modules/01-path/test/second.html

console.log(path.resolve(__dirname, '/second.html'));
// /second.html