const express =  require("express");
const app = express();
const port = 8080;
const _ = require("underscore");
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function (req, res) {
  res.render('index');
  console.log(req.body.userName);
})
app.get("/",(req,res) => {
  //res.send("hello");
  res.render('index');
})

app.listen(port,() => {
  console.log(`hello ${port}`);
})
