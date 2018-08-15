"use scrict";

module.exports = function(pool) 
{

    let Name_to_greet = '';
    let language= '';
    let namesGreeted = {};
    let PersonName;
    let PersonNameError;

    let counter = 0;

    let userArray = [];

  
    let UserObject = {};
    
   async function greetUser(user, lang)
    {
            if ( lang === undefined || user === undefined)
            {
                PersonNameError = "Oops you have to Enter a Name & Choose a Language!";
                return PersonNameError;
            }
            else{

                userArray.push(user);
                let userCounter = userArray.length;

                let data = [
                    user.name
                ];
                
                if(lang === "Isixhosa" && user !== undefined){
               
                    let name = user.toLowerCase();
                    PersonName = name.replace(/^.{1}/g, name[0].toUpperCase());
                    return "Molo, "+ PersonName;
                }

                else if(lang === "Afrikaans" && user !== undefined){
                    let name = user.toLowerCase();
                    PersonName = name.replace(/^.{1}/g, name[0].toUpperCase());
                 
                    return "Hallo, "+ PersonName;}
                else if(lang ==="English" && user !== undefined){
                    let name = user.toLowerCase();
                    PersonName = name.replace(/^.{1}/g, name[0].toUpperCase());

                    return "Hello, "+ PersonName;
                }
             return pool.query('INSERT into USERS (name)  values ($1)', data);
            }
             
        }

    function getUserArray () {return userArray;}

    function getUserList () {
        UserObject = getUserArray();
        return UserObject;
    }

    async function getCounter()
    {
        return pool.query('SELECT COUNT(*) FROM users');

    }

    async function allUsers(){
        let users = await pool.query('SELECT * from users');
        return users.rows;
    }

    async function getUserGreeted(name){
        return pool.query('SELECT * FROM users WHERE name = $1', [name]);
    }


    return {
       
        greet : greetUser,
        counter : getCounter,
        getGreetedUsersObj: getUserList,
        getUserArrayList: getUserArray,

        returnUsers: allUsers
    }

}