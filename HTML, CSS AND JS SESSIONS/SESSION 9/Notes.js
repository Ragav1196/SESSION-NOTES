// 1 - TO GET KEY AND VALUES OF OBJECT AS SEPERATED ARRAYS
    {let nice = {
        a:1,
        b:2
    };

    console.log("1 =>", Object.keys(nice)); //[ 'a', 'b' ]

    console.log("1 =>", Object.values(nice));}// [ 1, 2 ]

// 2 - ARRAY METHODS THAT DONT MODIFY ORIGINAL ARRAY
    // 2(1) - MAP
    // it applies the given function to each of the elements and return the same number od array elements
    // it returns array only
    // it doesnt change the original array it returns only a copy of the original array
       
        // 2(1)(1) - METHOD - 1
        
        {const arr = [10, 70, 40, 80];
        let double = (number) => {
            return number*2;
        }
        let result = arr.map(double);
            // just put the function name inside the bracket
            // each value will be passed to that function which will be taken care by "map"
        console.log("2(1)(1) =>", result)}// [ 20, 140, 80, 160 ]
        
        // 2(1)(2) - METHOD - 2  
        
        {const arr = [10, 70, 40, 80];
        let double = (number) => number*2;
            // no need to put brackets and write "return"
            // it diretctly writtens that value if the function is one line
            // this method can not be used for functions with more than one line
        let result = arr.map(double);
        console.log("2(1)(2) =>", result);}// [ 20, 140, 80, 160 ]

        // 2(1)(3)METHOD - 3

        {const arr = [10, 70, 40, 80];
        let result = arr.map((number) => number*2);
        console.log("2(1)(3)", result)}// [ 20, 140, 80, 160 ]
            // this one is combination of anonymous(no variable) and arrow function
        


    // 2(2) - FILTER
        // it applies the condition specified and return equal or lesser elements than in the original array
        // returns an array
            // 2(2)(1) - METHOD - 1

            {const marks = [80, 50, 90, 100, 30, 20, 70];
            let above_40 = (marks) => {
                if(marks > 40){
                    return marks;
                }
            }
            let result = marks.filter(above_40)
            console.log("2(2)(1) =>", result)}// [ 80, 50, 90, 100, 70 ]

            // 2(2)(2) - METHOD - 2

            {const marks = [80, 50, 90, 100, 30, 20, 70];
            let above_40 = (marks) => marks>40;
            let result = marks.filter(above_40)
            console.log("2(2)(2) =>", result)}// [ 80, 50, 90, 100, 70 ]

            // 2(2)(3) - METHOD - 3

            {const marks = [80, 50, 90, 100, 30, 20, 70];
            let result = marks.filter((mark) => mark>40)
            console.log("2(2)(3)", result)}// [ 80, 50, 90, 100, 70 ]


    // 2(3) - REDUCE
        // this method returns a single value of a whole array
        // it takes two parameters inside the bracket
        // first parameter is a function
            // which has two parameters,
                // total
                    // first initially it takes initial value that we have given
                    // after that it takes the return value of the function
                // current value
                    // the value of the current element in the array.
        // second parameter is a initial value
            // a value will be passed as an initial value to the function
        
            // 2(3)(1) - METHOD => 1

            {const numbers = [10, 30, 50, 80];
            let add = numbers.reduce((sum, num) => sum + num, 0);
                //sum - initial value initially
                        // after that it takes function return value
                // num - array cuurent element
                // 0 - initial value that is given
                console.log("2(3)(1)", add);}// 170 
                    // the final sum value is returned

            // 2(3)(2) - METHOD => 2
            
            {const numbers = [10, 30, 50, 80];
            let add = (sum, num) =>{
                return sum+num;
            }
            let result = numbers.reduce((add), 0)
                // add - function with two parameter
                // 0 - initial value
            console.log("2(3)(2)", result)}// 170

                // if initial value is not given then the sum value will be array first element and num value will be array second element

// 3 - TASKS TO SOLVE USING MAP, FILTER AND  REDUCE METHOD
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

    // 3(1) - TASK => 1 "TO GET ONLY THE NAMES"
        {let result = (scores) =>{
            return scores.name
        }
        console.log("3(1) =>", scores.map(result));}

    // 3(2) - TASK => 2 "TO GET THE OBJECTS THAT HAVE MARKS MORE THAN 40"
        {console.log("3(2), =>", scores.filter((scores) => scores.marks>40));}

    // 3(3) TASK => 3 "TO GET THE NAMES WHO ALL FAILED THAT IS LESSER OR EQUAL TO 40"
        // 3(3)(1) - METHOD => 1     
            {let failed_result = (scores) => {
                if(scores.marks <= 40){
                    console.log("3(3)(1)", scores.name);
                }
            }
            scores.filter(failed_result);}
                // this will not give in an array

        // 3(3)(2) - METHOD => 2
            let failed_students_obj = scores.filter((scores) => scores.marks <= 40);
            let failed_stud_arr = failed_students_obj.map((scores) => scores.name);
            console.log("3(3)(2)",failed_stud_arr);

        // 3(3)(3) - METHOD => 2
            console.log("3(3)(3)", 
                scores.filter((scores)=>scores.marks <= 40).map((scores) => scores.name)
            );
                // this method of writing as a single line is called as chaining

// EXERCISE CONTINUED TO NEXT CLASS
            
    
// 3 - ARRAY METHODS THAT MODIFY THE ORIGINAL ARRAY
    // 3(1) - PUSH

   { let arr = [40, 70];
    arr.push(90);
    console.log("3(1) =>", arr);}// [ 40, 70, 90 ]







// TO DO
    // Learn about "Immutability"