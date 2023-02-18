const express = require("express");
const app = express();
const port = 3000;
var ejs = require('ejs');
let morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const bodyParser = require('body-parser');


// Conect to Mongodb
const dbURI = 'mongodb+srv://eliasman:tuts12345@cluster0.kyxqw.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=> app.listen(3000))
.then (console.log('Connected to db'))
.catch((err) => console.log(err))
;

// Set the view engine to be "ejs"
app.set("view engine", "ejs");

// Middelwaren
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


app.use('/', blogRoutes);

//mongoose and mongo sandbox routes


app.get("/about", (req, res) => {
  res.render('about');
});

app.get("/contact", (req, res) => {
  res.render("contact");
});





