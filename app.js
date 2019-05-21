const express =  require("express");
const app = express();
const port = 8080;
const _ = require("underscore");
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/signup', function (req, res) {
  res.render('signup');
  console.log(req.body.userName);
})

app.get("/signup",(req,res) => {
  //res.send("hello");
  res.render('signup');
})

app.get("/login",(req,res) => {
  //res.send("hello");
  res.render('login');
})

app.post("/login",(req,res) => {
  //res.send("hello");
  res.render('login');
})

app.listen(port,() => {
  console.log(`hello ${port}`);
})
