const express = require("express");
const app = express();
const {
  getData,
  addContact,
  updateContacts,
  deleteContact,
} = require("./funcs/funcs")
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var cors = require("cors");
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// // Remove app.listen
module.exports = app;
