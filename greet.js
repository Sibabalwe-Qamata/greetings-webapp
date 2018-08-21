"use scrict";

module.exports = function(pool) 
{
    let PersonName;
    let PersonNameError;    
   async function greetUser(user, lang)
    {
            if ( lang === undefined || user === undefined)
            {
                PersonNameError = "Please enter a Name & Choose a Language!";
                return PersonNameError;
            }
               
                let Usersname = user.toLowerCase();
                PersonName = Usersname.replace(/^.{1}/g, Usersname[0].toUpperCase());
                // the data to the Database ....
                
                let checkUser =  await pool.query('SELECT id FROM users WHERE name=$1', [PersonName]);
                if( checkUser.rowCount < 1 )
                { 
                    await pool.query('INSERT into USERS (name, counter) values ($1,0)', [PersonName]);
                }
                
                await pool.query('UPDATE users SET counter = counter + 1 WHERE name=$1',[PersonName]);
                  
                if(lang === "Isixhosa" && user !== undefined){return "Molo, "+ PersonName;}

                else if(lang === "Afrikaans" && user !== undefined){ return "Hallo, "+ PersonName; }

                else if(lang ==="English" && user !== undefined){ return "Hello, "+ PersonName; }
             
        }

    async function getCounter()
    {
        let result = await pool.query('SELECT id FROM users');
        //console.log(result.rowCount);
        return result.rowCount;

    }
    async function allUsers(){
        let users = await pool.query('SELECT * from users');
        //console.log(users);
        return users.rows;
    }

    async function getUserGreeted(name){
        let result = await pool.query('SELECT * FROM users WHERE name = $1', [name]);
        return result.rows;
    }

    async function resetDB(){
        let clearDB = await pool.query("DELETE from users");
        console.log(clearDB.rows)
        return clearDB;
    }

    return {
       
        greet : greetUser,
        counter : getCounter,        
        deleteDB :resetDB,

        returnUsers: allUsers,
        returnGreetedUser: getUserGreeted
    }

}