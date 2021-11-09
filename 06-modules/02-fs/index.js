const fs = require('fs');
const path = require('path');

// Create folder
if (!fs.existsSync(path.join(__dirname, 'notes'))) {
  fs.mkdir(path.join(__dirname, 'notes'), (err) => {
    if (err) throw err;
    console.log('Folder created.');
  });
}

// Create file
fs.writeFile(
  path.join(__dirname, 'notes', 'note.txt'),
  'Hello, World!',
  (err) => {
    if (err) throw err;
    console.log('File created.')
  }
)

// Add text to file
fs.appendFile(
  path.join(__dirname, 'notes', 'note.txt'),
  ' From append file.',
  (err) => {
    if (err) throw err;
    console.log('Added text.')
  }
)

// Read file
fs.readFile(
  path.join(__dirname, 'notes', 'note.txt'),
  'utf-8',
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
)

// Rename file
fs.rename(
  path.join(__dirname, 'notes', 'note.txt'),
  path.join(__dirname, 'notes', 'new-note.txt'),
  (err) => {
    if (err) throw err;
    console.log('File has been renamed.')
  }
)
