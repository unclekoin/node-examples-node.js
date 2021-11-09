const fs = require('fs');
const path = require('path');

const [command, title, content] = process.argv.slice(2);
const filePath = path.join(__dirname, 'notes.json');

const init = () => {
  if (!fs.existsSync(path.join(filePath))) {
    const initialState = [];
    fs.writeFile(filePath, JSON.stringify(initialState), (error) => {
      if (error) return console.error(error.message);
      console.log('File created.');
    });
  } else {
    console.log('File already exists.');
  }
};

const create = (title, content) => {
  fs.readFile('notes.json', (error, data) => {
    if (error) return console.error(error.message);
    const notes = JSON.parse(data);
    notes.push({ title, content });
    const json = JSON.stringify(notes);

    fs.writeFile('notes.json', json, (error) => {
      if (error) return console.error(error.message);
      console.log('Notes created.');
    });
  });
};

const list = () => {
  fs.readFile(filePath, (error, data) => {
    if (error) return console.error(error.message);
    const notes = JSON.parse(data);
    notes.forEach((note, index) => console.log(`${index + 1}. ${note.title}`));
  });
};

const view = (title) => {
  fs.readFile(filePath, (error, data) => {
    if (error) return console.error(error.message);
    const notes = JSON.parse(data);
    const note = notes.find((note) => note.title === title);
    if (!note) {
      console.log('Note not found.');
    } else {
      console.log(note.title);
      console.log(note.content);
    }
  });
};

const remove = (title) => {
  fs.readFile(filePath, (error, data) => {
    if (error) return console.error(error.message);
    const notes = JSON.parse(data);
    const filteredNotes = notes.filter((note) => note.title !== title);
    const json = JSON.stringify(filteredNotes);

    fs.writeFile(filePath, json, (error) => {
      if (error) return console.error(error.message);
      console.log('Note deleted');
    });
  });
};

switch (command) {
  case 'list':
    list();
    break;
  case 'view':
    view(title);
    break;
  case 'create':
    create(title, content);
    break;
  case 'remove':
    remove(title);
    break;
  case 'init':
    init();
    break;
  default:
    console.log('Invalid command');
}
