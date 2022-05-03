//EXERCISE CONTINUE FROM PREVIOUS CLASS
// 1 - TASKS TO SOLVE USING MAP, FILTER AND  REDUCE METHOD
    const scores = [
        {
        marks: 32,
        name: "Yvette Merritt",
        },
        {
        marks: 57,
        name: "Lillian Ellis",
        },
        {
        marks: 22,
        name: "Mccall Carter",
        },
        {
        marks: 21,
        name: "Pate Collier",
        },
        {
        marks: 91,
        name: "Debra Beard",
        },
        {
        marks: 75,
        name: "Nettie Hancock",
        },
        {
        marks: 20,
        name: "Hatfield Hodge",
        },
    ];

    // 1(1) - TO GET THE AVERAGE OF ALL MARKS
        {let add = (sum, currentvalue) =>{
            let addition_marks = sum + currentvalue.marks
            return addition_marks                
        }

            let addition_marks = scores.reduce((add), 0);

        // TO CALCULATE AVERAGE:
        let length = scores.length;
        let average_marks = addition_marks/length;
        console.log("1(1)", average_marks.toFixed(2));}

    // 1(2) - TO FIND THE PERSON WHO GOT HIGHEST MARKS
        // 1(2)(1) - METHOD => 1    
            {let highest_marks = (sum, currentvalue) =>{
                if(sum.marks < currentvalue.marks){
                    sum = currentvalue
                }
                return sum;
            }

            console.log("1(2)(1)", scores.reduce((highest_marks)).name);}

        // 1(2)(2) - METHOD => 2 "USING TERNARY OPERATORS"
            let topper = scores.reduce((topper, curr_stud) =>
                topper.marks < curr_stud.marks ? curr_stud : topper);
                    // "?" => means if it is true execute curr_stud
                    // ":" => means it it is false execute toppper
            console.log("1(2)(2)", topper.name)

// 2 - KEYWORD "THIS"
    // 2(1) - EXAMPLE => 1 
        {let student = {
            firstname: "Deepan",
            lastname: "Chakkaravarthi",
            fullname: function (){
                return this.lastname + ", " + this.firstname;
                    // "this" is used to point to something
                    // "this" will not point to anything until it is called
            }
        };
        console.log("2(1) =>",student.fullname());}
            // in this case "this" is pointing to object "student" as it is called using the object "student"
            // not because it is inside the object called "student"

    // 2(2) - EXAMPLE => 2 "IN THIS CASE THE FUNCTION AND THE "THIS" KEYWORD IS PLACED OUTSIDE THE OBJECT
        {function printfullname (){
            return this.lastname + ", " + this.firstname;
        }

        let student = {
            firstname: "Ajith",
            lastname: "Padmakumar",
            fullname: printfullname
                // here the paranthesis at the end of "printfullname" is not given because if we give paranthesis
                    // the it is like we are calling the function. we donot want to call the function. we want to 
                    // store the function to the key "fullname"
        };

        console.log("2(2) =>", student.fullname());}
            // even though "this" is not directly indside the object it points to the object "student" when it is called using the "student"
            // so "this" will point to the object "student"
            // "this" keyword has to be given a context to whom it has to point
    
    // 2(3) - what if there is no context fot the keyword "this" to point to
        console.log("2(3) =>", printfullname());
            // whenever there is no context then the "this" will points to window object
    
    // 2(4) - let us try to add a object to window manually and try the above same function
        // window.firstname = "Murari";
        // window.lastname = "Reddy";
        // console.log("2(4) =>", printfullname());
        // console.log(window)
            // for this we cant see the output here instead we need to see the output in browser
            // because "window" is a object of browser
            // now we will get output for the function as the "this" is pointing to the window object 
                // and we have also created a key "firstname" and "lastname" on the window object

    // 2(5) - WHAT IF THE FUNCTION IS NOT SPECIFIED INSIDE THE OBJECT AND U WANT TO USE A FUNCTION FROM 
        // OUTSIDE THE OBJECT TO CALL THE KEYS INSIDE THE OBJECT

        let student = {
            firstname: "Dhananjay",
            lastname: "Patil"
        };

        console.log(printfullname.call(student));
            // "call" is used to make the "student" as context manually

        // THERE ARE OTHER METHODS LIKE CALL CHECK THE TASKS
        