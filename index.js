//import the greet module that is in the current folder
let Greet = require('./greet');


let express = require('express');
let app = express();

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Static Resource
//app.use(express.static('public'));

app.use(express.static(__dirname + '/public'));


//Body parser ...
let bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

//Database Connection Set-Up
const pg = require("pg");
const Pool = pg.Pool;

let useSSL = false;
let local = process.env.LOCAL || false;

if (process.env.DATABASE_URL && !local) {
    useSSL = true;
}

const connectionString = process.env.DATABASE_URL || 'postgresql://coder:pg123@localhost:5432/usersDB';

const pool = new Pool({
    connectionString,
    ssl: useSSL
});


//Pass the pool string....
const greetUser = Greet(pool);


app.get('/', async function (req, res) {

    let Counter = await greetUser.counter();
    res.render('home', {Counter})
});


app.post("/greet", async function (req, res) {
    try {
        // get inbound parameters - from the url params or the **form** or both
        let {
            user,
            language
        } = req.body;

        // add the user greeted to the database
        let greetPerson = await greetUser.greet(user, language);
        // ask the database how many users has been greeted    
        let counter = await greetUser.counter();

        let greetHuman = {
            person: greetPerson,
            Counter: counter
        }
        res.render("home", greetHuman);
    } catch (error) {
        res.redirect("/");
    }

});

app.get("/greeted", async function (req, res) {

    try {
        let greetedUsers = await greetUser.returnUsers();
        res.render("records", {greetedUsers});
    }
    catch(error){
        res.redirect("/");
    }


});

app.get("/counter/:username", async function (req, res) {
    try {
        let {username} = req.params;
        let user =  await greetUser.returnGreetedUser(username);
        console.log(user);
        res.render("counter", {user});
    }
    catch(error)
    {
       res.redirect("/");
    }
});


//This Route should delete the users in the database ....
app.get("/reset", async function(req,res){
    try{
        let deleteUsers = await greetUser.deleteDB();
        res.redirect("/");
    }
    catch(error){
        res.redirect("/");
    }
})

//-------------------------------------------//
let PORT = process.env.PORT || 3312;

app.listen(PORT, function () {
    console.log('App starting on port', PORT);
});