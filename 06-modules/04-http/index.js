const http = require('http');

const PORT = 3000;

const requestHandler = (request, response) => {
  const { method, url } = request;
  const heading = `<h1 style="color: red">${url} page</h1>`;
  const content = `<div style="background-color: green; width: 100px; height: 100px">Green block 100px x 100px</div>`;
  console.log(`${method}-request received, url: ${url}`);
  response.write(heading);
  response.end(content);
};

const server = http.createServer(requestHandler);

server.listen(PORT, 'localhost', () => {
  console.log(`Start server... Port: ${PORT}`);
});
