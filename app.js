const express =  require("express");
const app = express();
const port = 8080;
const _ = require("underscore");

app.get("/",(req,res) => {
  res.send("hello");
})

app.listen(port,() => {
  console.log(`hello ${port}`);
})
