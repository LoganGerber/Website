const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

app.use(express.static('static'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'static/html/index.html')));

app.listen(port, () => console.log(`Listening on ${port}`));