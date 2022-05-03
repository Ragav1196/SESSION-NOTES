// WRITE A FUNCTION IF THEY ARE LEGAL OR NOT
    //"legal_or_not" - function name
    //"age" - parameter
    // the value that goes in "age" is known as argument
    function legal_or_not(age){
        //the "age" that is given here can be anything; 
        //it is just given to represent the value of pradeep;
        
        if(age >= 18){
            return "major";
        }
        else{
            return "minor";
        }
    };
    var pradeep = 17;
        
        //calling a function
            console.log(legal_or_not(pradeep));