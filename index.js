const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())

app.get("/api/my-products", (req, res) => {
  const products = getData();
  res.send(products);
});


app.listen(port, () => {
  console.log(`it serves at http://localhost:${port}`);
});
