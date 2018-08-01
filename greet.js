function greeting(UserDatabase) 
{

    var Name_to_greet = '';
    var language= '';
    var namesGreeted = {};

    
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

    function greetUser()
    {
        if(language === "Isixhosa"){return "Molo, "+Name_to_greet;}
        else if(language === "Afrikaans"){return "Hallo, "+Name_to_greet;}
        else if(language ==="English"){return "Molo, "+Name_to_greet;}
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
        get_language : getLanguageChoice,
        get_NameList : getNameMap,

        doGreet : greetUser,
        counter : getCounter,
        updateNameList : updateNameMap
    }

}