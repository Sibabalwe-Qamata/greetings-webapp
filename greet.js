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
        // if (numPlate !== " ") {
        //     numberPlateDisplay = numPlate;
        // }

        // if (plateStored[numPlate] === undefined) 
        // {
        //     plateStored[numPlate] = 0;
        // }

            
            if ( language === undefined || Name_to_greet === undefined)
            {
                PersonNameError = "Oops you have to Enter a Name & Choose a Language!";
                return PersonNameError;
            }
            else{
                UserObject[PersonName]= 1;
              
                if(language === "Isixhosa" && Name_to_greet !== undefined){
               
                    let name = Name_to_greet.toLowerCase();
                    PersonName = name.replace(/^.{1}/g, name[0].toUpperCase());
                   
                  
                    
                    return "Molo, "+ PersonName;}
                else if(language === "Afrikaans" && Name_to_greet !== undefined){
                    let name = Name_to_greet.toLowerCase();
                    PersonName = name.replace(/^.{1}/g, name[0].toUpperCase());
                 
                  
    
                    return "Hallo, "+ PersonName;}
                else if(language ==="English" && Name_to_greet !== undefined){
                    let name = Name_to_greet.toLowerCase();
                    PersonName = name.replace(/^.{1}/g, name[0].toUpperCase());
                
                   
                    return "Hello, "+ PersonName;
                }


            }
             
 }
        
    

    //Below are Getter functions

    function getNameToGreet(){return Name_to_greet;}

    function getLanguageChoice(){return language;}

    function getNameMap(){return namesGreeted;}

    function updateNameMap(){return namesGreeted ={};}

    function getUserList () {return Object.keys(UserObject);}

    function getUserArray () {return UserObject;}

    function getCounter(){return Object.keys(UserObject).length;}

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
        updateNameList : updateNameMap,
        getGreetedUsersObj: getUserList,
        getUserArrayList: getUserArray,

        returnUsers: getNameList
    }

}