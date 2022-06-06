const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/hallow", (req, res) => {
  res.send("Hello World..........!");
});
app.get("/data", (req, res) => {
  res.send({ name: "jaseel", age: 20 }, { name: "sourav", age: 25 });
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening port ${port}`);
});

// git add .
// git commit -m "test"
// git push origin main
