const express = require("express");
const app = express();
const port = 3000;
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get("/api/my-products", (req, res) => {
  const products = getData();
  res.send(products);
});


app.listen(port, () => {
  console.log(`it serves at http://localhost:${port}`);
});
