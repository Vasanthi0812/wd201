const http = require('http');
const fs = require('fs');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));
const port = argv.port || 5000; // Use the supplied port or default to 3000

const server = http.createServer((req, res) => {
  if (req.url === '/registration') {
    const filePath = path.join(__dirname, 'registration.html');
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  } else if (req.url === '/') {
    // Handle other routes or serve home.html
    const filePath = path.join(__dirname, 'home.html');
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});