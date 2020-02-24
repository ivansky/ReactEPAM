const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const BUILD_DIR = path.join(__dirname, './build');
const HTML_FILE = path.join(BUILD_DIR, 'index.html');

app.use(express.static(BUILD_DIR));
app.get('/api', (req, res) => {
  res.send(mockResponse);
});
app.get('/', (req, res) => {
 res.sendFile(HTML_FILE);
});
app.listen(port, function () {
 console.log('App listening on port: ' + port);
});