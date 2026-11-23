const http = require('http');

const PORT = process.env.PORT || 3000;

const html = `<!DOCTYPE html>
<html>
  <head><title>Todo app</title></head>
  <body>
    <h1>Todo app</h1>
    <p>Hello from Kubernetes!</p>
  </body>
</html>`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

server.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`);
});
