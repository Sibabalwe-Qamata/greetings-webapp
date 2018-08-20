"use scrict";

let assert = require('assert');

let greetingPerson = require('../greet.js');

const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://localhost:5432/usersDB';

const pool = new Pool({
    connectionString
});

describe('The Greeting WebApp Database Unit Tests', function() 
{
      beforeEach(async function(){
        await pool.query("delete from users;");
    });

     it('It should Greet the user(Siphe) with the proper language and name (i.e Molo, Siphe)',
    function() {
      var greetings = await greetingPerson({});

      greetings.setname("Siphe");
      greetings.set_language("Isixhosa");

      assert.equal(greetings.doGreet(),'Molo, Siphe');
  
     });

  });