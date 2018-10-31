const express = require('express');
const bodyParser = require('body-parser');

const Instructors = require('../database/index.js');

const app = express();
const port = 3332;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../'))

app.get("/", (req, res) => {
 res.send("Hello World");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});