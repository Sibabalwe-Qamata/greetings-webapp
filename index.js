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

let PORT = process.env.PORT || 3312;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});