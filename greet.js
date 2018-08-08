"use scrict";

module.exports = function(UserDatabase) 
{

    var Name_to_greet = '';
    var language= '';
    var namesGreeted = {};
    let PersonName;
    let PersonNameError;

    let counter = 0;

    let userArray = [];

  
    let UserObject = {};

    
    function setName(greetName){
        userArray.push(greetName);
        if(greetName !== " "){Name_to_greet = greetName;}
    }

    function setLanguage(lang){language= lang;}

    function checkUserStoredList(){
        if(UserDatabase){ namesGreeted = UserDatabase;}

        if(Name_to_greet !==""){
            if(namesGreeted[Name_to_greet] === undefined)
            {
                namesGreeted[Name_to_greet]=0;
            }
        }

    }
    function CapitilizeName() 
    {
        let name = Name_to_greet.toLowerCase();
            PersonName = name.replace(/^.{1}/g, name[0].toUpperCase());
      
    }
    

    function greetUser()
    {
      
            
            if ( language === undefined || Name_to_greet === undefined)
            {
                PersonNameError = "Oops you have to Enter a Name & Choose a Language!";
                return PersonNameError;
            }
            else{
               // 
               //UserObject['Users'] = new Array();
                if(language === "Isixhosa" && Name_to_greet !== undefined){
               
                    let name = Name_to_greet.toLowerCase();
                    PersonName = name.replace(/^.{1}/g, name[0].toUpperCase());
                   
                   
                    //UserObject['Users'].push(PersonName);
                    return "Molo, "+ PersonName;}
                else if(language === "Afrikaans" && Name_to_greet !== undefined){
                    let name = Name_to_greet.toLowerCase();
                    PersonName = name.replace(/^.{1}/g, name[0].toUpperCase());
                 
                    //UserObject['Users'].push(PersonName);
                   // userArray.push(PersonName);
    
                    return "Hallo, "+ PersonName;}
                else if(language ==="English" && Name_to_greet !== undefined){
                    let name = Name_to_greet.toLowerCase();
                    PersonName = name.replace(/^.{1}/g, name[0].toUpperCase());

                    //UserObject['Users'].push(PersonName);
                    //userArray.push(PersonName);
                    return "Hello, "+ PersonName;
                }

               
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

    function getNameList() {
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
        getFormatedName: CapitilizeName,
        get_language : getLanguageChoice,
        get_NameList : getNameMap,

        doGreet : greetUser,
        counter : getCounter,
        getGreetedUsersObj: getUserList,
        getUserArrayList: getUserArray,

        returnUsers: getNameList
    }

}