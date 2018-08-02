"use scrict";

let assert = require('assert');

let greetingPerson = require('../greet.js');


describe('The Greet function', function() 
{
  
     it('It should Greet the user(Siphe) with the proper language and name (i.e Molo, Siphe)',
    function() {
      var greetings = greetingPerson({});

      greetings.setname("Siphe");
      greetings.set_language("Isixhosa");

      assert.equal(greetings.doGreet(),'Molo, Siphe');
  
     });

     it('It should Greet the user(Siphelo) with the proper language and name (i.e  Hallo,Siphelo)',
    function() {
      var greetings = greetingPerson({});

      greetings.setname("Siphelo");
      greetings.set_language("Afrikaans");
      assert.equal(greetings.doGreet(),'Hallo, Siphelo');
     });

     it('It should Increment the counter, if Three users were greeted ',
    function() {
      var greetings = greetingPerson({});

      greetings.setname("Siba");
      greetings.set_language("English");

      greetings.setname("Siphe");
      greetings.set_language("Isixhosa");

      greetings.setname("Siphelo");
      greetings.set_language("Afrikaans");

      assert.equal(greetings.counter(),0);
     
     });

     it('It should not Increment the counter, since only One User is greeted in three different languages',
     function() {
       var greetings = greetingPerson({});
 
       greetings.setname("Siba");
       greetings.set_language("English");
        console.log(greetings.counter());
       assert.equal(greetings.counter(),1);
      
      });


  });