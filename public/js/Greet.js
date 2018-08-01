function greeting(UserDatabase) {

        var Name_to_greet = '';
        var language = '';
        var Counter = 0;
        var namesGreeted = UserDatabase || {};


        function setName(greetName) {
            if (greetName !== " ") {
                Name_to_greet = greetName;
            }

            if (namesGreeted[Name_to_greet] === undefined) 
            {
                namesGreeted[Name_to_greet] = 0;
            }
        }

        function setLanguage(lang) {
            language = lang;
        }

        function CapitilizeString(word) 
        {
            let name = word.toLowerCase();
            let PersonName = name.replace(/^.{1}/g, name[0].toUpperCase());
            
            return PersonName ;
        }
        

        function greetUser() {
            if (language === "Isixhosa") {
                return "Molo, " + Name_to_greet;
            } else if (language === "Afrikaans") {
                return "Hallo, " + Name_to_greet;
            } else if (language === "English") {
                return "Hello, " + Name_to_greet;
            }
        }

        //Below are Getter functions

        function getNameToGreet() {
            return Name_to_greet;
        }



        function getLanguageChoice() {
            return language;
        }

        function getNameMap() {
            return namesGreeted;
        }

        function getCounter() {
            return Object.keys(namesGreeted).length;
        }
        
        
         return {
            set_Name: setName,
            set_language: setLanguage,
            capitilize: CapitilizeString,


            get_name: getNameToGreet,
            get_language: getLanguageChoice,
            get_NameList: getNameMap, 
            doGreet: greetUser,
            counter: getCounter
        }


    }
