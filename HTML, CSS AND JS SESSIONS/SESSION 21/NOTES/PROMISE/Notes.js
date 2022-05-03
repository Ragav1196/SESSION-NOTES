// PROMISE
    // mostly we wont create a promise we only use already created promise

    // STATES OF PROMISE
        // Pending
        // Fullfilled
        // rejected

    // TO CREATE A PROMISE TO GET FULLFILLED
        {const isLegal = new Promise((resolve, reject) => {
            // promise takes in function which has two call backs "resolve and reject"
            let age = 20;
            if(age>= 18){
                resolve("Major");
            }
            else{
                reject("Minor");
            }
        });
        console.log(isLegal);}
            // the data type of result is a promise object
            // here the promise state will be "fullfilled"

    // TO CREATE A PROMISE TO GET PENDING(SET TIMEOUT)
        {const isLegal = new Promise((resolve, reject) => {
            let age = 20;
            if(age>= 18){
                setTimeout(() => resolve("Major"), 1000*4);
            }
            else{
                reject("Minor");
            }
        });
        console.log(isLegal);}
            // as we have a settimeout here the resultant of promise state will be "pending"
            // only after the set timeout completes the promise state will become fulfilled

    // TO CREATE A PROMISE TO GET REJECTED
        {const isLegal = new Promise((resolve, reject) => {
            let age = 14;
            if(age>= 18){
                setTimeout(() => resolve("Major"), 1000*4);
            }
            else{
                reject("Minor");
            }
        });
        console.log(isLegal);}
            // here the promise state will be rejected

    // USING PROMISE TO PRINT THE MESSAGE OF RESOLVE
        // above is about creating a promise
        // this is about using that promise
        {const isLegal = new Promise((resolve, reject) => {
            let age = 20;
            if(age>= 18){
               resolve("Major");
            }
            else{
                reject("Minor");
            }
        });
        isLegal.then((msg)=> console.log(msg));}
            // this will print the message within resolve when it is called
            // message within resolve is the aruguement for the ".then"
            // we are console.logging that messsage

    // WHAT WILL HAPPEN INCASE REJECT IS CALLED
        {const isLegal = new Promise((resolve, reject) => {
            let age = 14;
            if(age>= 18){
                resolve("Major");
            }
            else{
                reject("Minor");
            }
        });
        isLegal.then((msg)=> console.log(msg));}
            // in this case we get a error

    // HANDLING ERRORS IN JS
        {const data = JSON.parse('{"x": 4, "name": "Ajith"}');
            // "JSON.parse" wil convert the string into a object
            // it will only convert if the format is correct or otherwise it throws an error
        console.log(data);
            // we get a object    
        console.log('{"x": 4, "name": "Ajith"}')}
            // this is just a string

        // TO CATCH THE ERROR AND CHANGE IT 
            // for that purpose try and catch method is used
            {try {
                const data = JSON.parse('{"x": 4, "name" "Ajith"}');
                    // as it miss a semi Colon, it will throw an error
                console.log(data);
                    // if there is no error this will gets executed
                    // or else it goes to "catch"
            } catch (error) {
                console.log("TRY AGAIN")                
                    // if there is an error then this message will get printed
                    // only when an error occur it will come to the "catch"     
                console.log(error);
                    // this will print the original error message               
            }}

    // HANDLING ERRORS IN PROMISE
        // EXAMPLE - 1
            {const isLegal = new Promise((resolve, reject) => {
                let age = 14;
                if(age>= 18){
                    resolve("Major");
                }
                else{
                    reject("Minor");
                }
            });
            isLegal
            .then((msg)=> console.log(msg))
                // whenever there is a error ".then" is skipped same like the "try" is missed incase of try and catch
            .catch((errorMsg) => console.log(errorMsg));}
                // reject message is stored as argument in the ".catch"
                // that can be console.logged

        // EXAMPLE - 2
            {const isLegal = new Promise((resolve, reject) => {
                let age = 20;
                if(age>= 18){
                    resolve("Major");
                }
                else{
                    reject("Minor");
                }
            });
            isLegal
            .then((msg)=> console.log(msg + "! Congratualtions"))
                // this will get executed and catch is skipped as there is no error
            .catch((errorMsg) => console.log(errorMsg));}

    // CHAINING
       { console.log(
            [1, 2, 3]
            .map((x) => x*2)
            .map((y)=> y+4)
                // this method of doing methods on the result is called as chaining
                // we can do n number of chaining until it returns same data type
                // in this case it returns an array every time
                // first map is done on the original array
                // second map is done on the result of first map method which is an array
                
        );}

        // EXERCISE 
            // 1
                {const isLegal = new Promise((resolve, reject) => {
                    let age = 20;
                    if(age>= 18){
                        resolve("Major");
                    }
                    else{
                        reject("Minor");
                    }
                });
                isLegal
                    // "isLegal" is promise object
                .then((msg)=> msg + "! Congratualtions")
                    // ".then" will also returns a promise object
                    // as it is returning the same data type we can do n number of time chaining with the ".then"
                .then((msg_1)=> console.log(msg_1 + "Nice"))        
                    // "msg_1" holds the return value of before ".then" which is a promise object
                .catch((errorMsg) => console.log(errorMsg));}

    // RANDOM STUFF
        // 1
            {function x(){
                "Awesome"
            }
            let y = x();
            console.log(y);}
                // as the function is ot returning anything "y" become undefined
                
        // 2
            {function x() {
                console.log("Awesome");
            }
            let y = x();
            console.log(y);}
                // still the y will be undefined only as we are not reurning anything
                // Awesome will be printe3d on the console

        // 3
            {function x() {
                return "Awesome";
            }
            let y = x();
            console.log(y);}
                // y will be "Awesome"

        // 4
            {function x() {
                return console.log("Awesome");
                    // console.log is function
                    // console.log("Awesome") will return "undefined" as it doesnt have any value
                    // its work is to print on the sceen so it doesnt hold any value
                    // so the function return undefined
            }
            let y = x();
            console.log(y);}  
                // here the "y" will be undefined as the function returns undefined as value
    // CHAINING CONT.
        // 2
        {const isLegal = new Promise((resolve, reject) => {
            let age = 20;
            if(age>= 18){
                resolve("Major");
            }
            else{
                reject("Minor");
            }
        });
        isLegal
        .then((msg)=> msg + "! Congratualtions")            
        .then((msg_1)=> console.log(msg_1 + "Nice"))
        .then((msg_2)=> console.log(msg_2 + "Good"))                    
        .catch((errorMsg) => console.log(errorMsg));}
            



