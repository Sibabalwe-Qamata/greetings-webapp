"use scrict";

module.exports = function(UserDatabase) 
{

    var Name_to_greet = '';
    var language= '';
    var namesGreeted = {};
    let PersonName;

    
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
        
        return PersonName ;
    }
    

    function greetUser()
    {
        if(language === "Isixhosa"){return "Molo, "+ PersonName;}
        else if(language === "Afrikaans"){return "Hallo, "+ PersonName;}
        else if(language ==="English"){return "Molo, "+ PersonName;}
    }

    //Below are Getter functions

    function getNameToGreet(){return Name_to_greet;}

    function getLanguageChoice(){return language;}

    function getNameMap(){return namesGreeted;}

    function updateNameMap(){return namesGreeted ={};}

    function getCounter(){return Object.keys(namesGreeted).length;}

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
        updateNameList : updateNameMap
    }

}