const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Happy Hacking! 🚀'));

app.listen(3000, console.log('> Listening'));
