//import the greet module that is in the current folder
const Greet = require('./greet');


let express = require('express');
let app = express();

const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Static Resource
//app.use(express.static('public'));

app.use(express.static(__dirname + '/public'));


//Body parser ...
let bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Database Connection Set-Up
const pg = require("pg");
const Pool = pg.Pool;

let useSSL = false;
let local = process.env.LOCAL || false;

if (process.env.DATABASE_URL && !local){
    useSSL = true;
}

const connectionString = process.env.DATABASE_URL || 'postgresql://coder:pg123@localhost:5432/usersDB';

const pool = new Pool({
    connectionString,
    ssl : useSSL
  });


//Pass the pool string....
const greetUser = Greet(pool);


app.get('/', function(req, res){
    let greetedPeople = greetUser.getGreetedUsersObj();

  res.render('home', {Counter: greetUser.counter()});
});


//This Route should accept the username as part of the url.
app.post("/greet", async function(req, res)
{
    // get inbound parameters - from the url params or the **form** or both
    let {user, language} = req.body;
    console.log(user)
    console.log(language)
    // add the user greeted to the database
   let greetPerson =  await greetUser.greet(user, language);
    // ask the database how many users has been greeted    
    let counter = await greetUser.counter();
   
    console.log("Counter:", counter);
 
    let greetHuman = {
        person : greetPerson,
        Counter: counter
    }
    res.render("home", {greetHuman});
});

app.get("/greeted", function(req,res){
  
    let greetedPeople = greetUser.getGreetedUsersObj();
    // console.log("UserList Arr", greetedPeople);
    // console.log("UserList Object", greetUser.getGreetedUsersObj());

    res.render("records", {greetedPeople});

});

app.get("/counter/:username", function(req,res){


});




//-------------------------------------------//
let PORT = process.env.PORT || 3312;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});