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
    let greetedPeople = greetUser.getGreetedUsersObj();

  res.render("home", {Counter: greetUser.counter()});
});


//This Route should accept the username as part of the url.
app.post("/greet", function(req, res)
{
    // get inbound parameters - from the url params or the **form** or both
    let userPerson = req.body.user;
    let languageChoice = req.body.language;

    // use the inbound data
    greetUser.setname(userPerson);
    greetUser.set_language(languageChoice);
    // send response back to the user using res.render
    

    console.log("Counter:", greetUser.counter());
 
    let greetHuman = {
        person : greetUser.doGreet(),
        Counter: greetUser.counter()
    }

    res.render("home", {greetHuman});
});

app.get("/greeted", function(req,res){
  
    let greetedPeople = greetUser.getGreetedUsersObj();
    console.log("UserList Arr", greetedPeople);
    console.log("UserList Object", greetUser.getGreetedUsersObj());

    res.render("records", {greetedPeople});

});

app.get("/counter/:username", function(req,res){



});




//-------------------------------------------//
let PORT = process.env.PORT || 3312;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});