//import the greet module that is in the current folder
const Greet = require('./greet');
const greetUser = Greet();

let express = require('express');
let app = express();

const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Static Resource
app.use(express.static('public'));


//Body parser ...
let bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get("/", function(req, res){
  res.render("home");
});


//This Route should accept the username as part of the url.
app.post("/greetings/:user", function(req, res)
{
    let userPerson = req.body.user;
    let languageChoice = req.body.language;


});

app.get("/greeted", function(req,res){



});

app.get("/counter/:username", function(req,res){



});




//-------------------------------------------//
let PORT = process.env.PORT || 3312;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});