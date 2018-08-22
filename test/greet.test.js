"use scrict";

let assert = require("assert");

let greetingPerson = require("../greet.js");

const pg = require("pg");
const Pool = pg.Pool;

const connectionString =
  process.env.DATABASE_URL || "postgresql://coder:pg123@localhost:5432/usersDB";

const pool = new Pool({
  connectionString
});

describe("The Greeting WebApp Database Unit Tests", async function() {
  beforeEach(async function() {
    await pool.query("delete from users;");
  });

  it("It should Greet the user(Siphe) with the proper language and name (i.e Molo, Siphe)", async function() {
    let greetings = await greetingPerson(pool);
    assert.equal(await greetings.greet("Siphe", "Isixhosa"), "Molo, Siphe");
  });

  it("It should Greet the user(Mbuso) with the proper language and name (i.e Hello, Mbuso)", async function() {
    let greetings = await greetingPerson(pool);
    assert.equal(await greetings.greet("Mbuso", "English"), "Hello, Mbuso");
  });

  it("It should Greet the user(Siba) with the proper language and name (i.e Hallo, Siba)", async function() {
    let greetings = await greetingPerson(pool);
    assert.equal(await greetings.greet("Siba", "Afrikaans"), "Hallo, Siba");
  });

  it("It should Return the number of users that exists in the database.", async function() {
    let greetings = await greetingPerson(pool);
    await greetings.greet("Siba", "Afrikaans");
    await greetings.greet("Siphe", "Isixhosa");
    assert.equal(await greetings.counter(), 2);
  });

  it("It should Return the number of users that exists in the database (i.e Siba, Siphe, Siphelo).", async function() {
    let greetings = await greetingPerson(pool);
    await greetings.greet("Siba", "Afrikaans");
    await greetings.greet("Siphe", "Isixhosa");
    await greetings.greet("Siphelo", "English");
    assert.equal(await greetings.counter(), 3);
  });

  it("It should return all the users that .", async function() {
    let greetings = await greetingPerson(pool);
    await greetings.greet("Siba", "Afrikaans");
    await greetings.greet("Siba", "Isixhosa");
    await greetings.greet("Siba", "English");

    assert.equal(await greetings.returnGreetedUser("Siba"), "Hello, Siba has been greeted  3 times.");
  });


  it("It should return all the users that .", async function() {
    let greetings = await greetingPerson(pool);
    await greetings.greet("Sibabalwe", "Afrikaans");
    await greetings.greet("Sibabalwe", "Isixhosa");
   

    assert.equal(await greetings.returnGreetedUser("Sibabalwe"), "Hello, Sibabalwe has been greeted  2 times.");
  });
});
