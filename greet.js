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

    
   async function setName(greetName){
       

        if(greetName !== " ")
        {
            Name_to_greet = greetName;
            
            let userCounter = userArray.length;
            
        }
    }

   async function setLanguage(lang){   language= lang;  }

   async function checkUserStoredList(){
        if(UserDatabase){ namesGreeted = UserDatabase;}

        if(Name_to_greet !==""){
            if(namesGreeted[Name_to_greet] === undefined)
            {
                namesGreeted[Name_to_greet]=0;
            }
        }

    }
    
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
                    user.name,
                    userCounter.counter
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
             return pool.query('insert into users (name, counter)  values ($1, $2)', data);
            }
             
        }
        
    //Below are Getter functions

    function getNameToGreet(){return Name_to_greet;}

    function getLanguageChoice(){return language;}

    function getNameMap(){return namesGreeted;}

   

    function getUserArray () {return userArray;}

    function getUserList () {
        UserObject['Users']= getUserArray();
        return UserObject;
    }

    

    function getCounter(){return userArray.length;}

    async function getNameList() {
        if (Name_to_greet === "" || language === undefined) {
            return userArray;
        } else {

            return userArray.filter(current => current.Type === Name_to_greet);
        }

    }



    return {
        setname: setName,
        set_language: setLanguage,
        checkList: checkUserStoredList,

        get_name : getNameToGreet,
     
        get_language : getLanguageChoice,
        get_NameList : getNameMap,

        greet : greetUser,
        counter : getCounter,
        getGreetedUsersObj: getUserList,
        getUserArrayList: getUserArray,

        returnUsers: getNameList
    }

}