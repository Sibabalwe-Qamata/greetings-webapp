"use scrict";

let assert = require('assert');

let greetingPerson = require('../greet.js');

const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://coder:pg123@localhost:5432/usersDB';

const pool = new Pool({
    connectionString
});

describe('The Greeting WebApp Database Unit Tests', async function() 
{
    beforeEach(async function(){ await pool.query("delete from users;");});

     it('It should Greet the user(Siphe) with the proper language and name (i.e Molo, Siphe)',
       async function() 
      {
          let greetings = await greetingPerson(pool);
          assert.equal(await greetings.greet("Siphe","Isixhosa" ),'Molo, Siphe');
     });

     it('It should Greet the user(Mbuso) with the proper language and name (i.e Hello, Mbuso)',
     async function() 
    {
        let greetings = await greetingPerson(pool);
        assert.equal(await greetings.greet("Mbuso","English" ),'Hello, Mbuso');
   });

   it('It should Greet the user(Siba) with the proper language and name (i.e Hallo, Siba)',
   async function() 
  {
      let greetings = await greetingPerson(pool);
      assert.equal(await greetings.greet("Siba","Afrikaans" ),'Hallo, Siba');
 });


  });