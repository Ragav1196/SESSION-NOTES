// FUNCTION:- (Continue from previous class)
    // TYPES OF FUNCTIONS:-
        // IIFE:
            // ADVANTAGES:
                // The variable name assigned to the IIFE can be used again in the codes
                    // as IIFE function gets erased after execution

        // ARROW FUNCTION:
            // NORMAL FUNCTION
            // function sum(a, b){
            //     return a + b;
            // }
            // console.log(sum(4, 5));// 9

            // WRITING ABOVE FUNCTION IN ARROW FORM:
            // let sum = (a, b) =>{
            //     return a + b;
            // };
            // console.log(sum(4, 5));// 9

            // TO CONVERT THE ABOVE ARROW FUNCTION INTO ONE LINE:
            // let sum = (a, b) => a + b;
            // console.log(sum(14, 6));// 20
                // Only functions with one line inside the bracket can be converted into a one line function.
                // if it is more than one then cant convert into one line function

            // Another example to convert to one line function:
            // let getname = student =>{
            //     let msg = "welcome, " + student.name;
            //     return msg;
            // }
            // console.log(getname({name : "Ragav"}));// welcome, Ragav

            // Above code in one line:
            // let getname = student => "welcome, " + student.name;
            // console.log(getname({name : "Ragav"}));// welcome, Ragav

// DESTRUCTURING:-
    // Destruturing can be done on both array and object
    // destrucuring is used to take out the value individually from an array or object by assigning to a variuable
        
    // ARRAY DESTRUCTURING:    
        // const [b10, b11] = [20, 30];
        // console.log(b10, b11);// 20 30
            // "20" is assigned to "b10"
            // "30" is assigned to "b11"
            
        // const [b10, b11, b12] = [20, 30];
        // console.log(b10, b11, b12);// 20 30 undefined
            // As there is no value present in the array for "b12", the output will be undefined
            // The above "b12" is like writing
            // const b12; // no value given
                //eventually it become undefined
        // const [b10, b11, b12 = 10] = [20, 30]
        // console.log(b10, b11, b12);// 20 30 10
            // here the "10" value that is assigned to "b12" is known as default value
            // This default value will only be chosen by the "b12" when there is no value in the adjacent array for the "b12"
            // That is the dafualt value will be chosen by the "b12" when the value of "b12" is "undefined"
            // const [b10, b11, b12 = 10] = [20, 30, 45]
            // console.log(b10, b11, b12);// 20 30 45
                // In this case there is a value for the "b12" present in the array
                // so "b12" is not "undefined"
                // Hence "b12" will choose the value from the array which is "45"
            // const [b10, b11, b12 = 10] = [20, null, 45]
            // console.log(b10, b11, b12);// 20 null 45
                // Reason for the "b11" to get printed as "null" is because as i said above the dafault value will be chosen only if the value is "undefined"
            // const [name, classname] = ["b28", "Megha"];
            // console.log(name, classname);// b28 Megha
                // The matching is only done by the index order not by the content inside the array
                // So dont thing for "name" only name gets printed in the above case "Megha"
                // it is not assigned based on the name or classname it is printed on the basis of index
    
            // const [ , name, classname] = ["Rakesh", ,"B24"];
            // console.log(name, classname);// undefined B24
                // For the first one there is no variable to get assigned so nothing get printed for that
                // for name there is no value so it will be assigned as "undefined"
    // OBJECT DESTRUCTURING:
        // const {name, classname} = {classname: "B28", name: "Mega"};
        // console.log(name, classname);// Mega B28
            // In the case of object it doesnt get matched by the index as in the case of array
            // Here it only gets matched by the keys
            // so for "name" it only gets assigned to the value of "name" which is "Mega"
    
        // const {name, classname = "B25"} = {classname: "B28", name: "Mega"};
        // console.log(name, classname);// Mega B28
            // As said in the above case of array the "classname" has to be "undefined" then only the default value will be chosen
        
        // const {name, classname = "B25"} = { name: "Mega"};
        // console.log(name, classname);// Mega B25
            // default value is chosen as there is undefined or value given
    
    // DESTRUTURING USING SPREAD OPERATOR:
    // const [h1, h2, h3] = [10, 20, 30, 40, 50, 60];
    // console.log(h1, h2, h3);// 10 20 30

    //TO PRINT ALL THE REST VALUES IN THE ARRAY ABOVE:
        // Since there is no value for the rest of the value to get assigned to hence they are not getting printed
        // to print those values also we can use the rest operator, which will print all the rest values in the last variable as an single array
        // This rest operator can only be used on the last variable only
        // const [h1, h2, ...h3] = [10, 20, 30, 40, 50, 60];
        // console.log(h1, h2, h3);// 10 20 [ 30, 40, 50, 60 ]
        // console.log(h1, h2, ...h3);
            // rest operator is specified using (...) Symbol, this symbol is also used for the spread operator

// DIFFERENCE BETWEEN THE REST AND SPREAD OPERATOR:
    // console.log(Math.max(4, 5, 200, 7));// 200
        // "Math.max" can take a any number of values and can print only the biggest number
    
    // const marks = [4, 5, 200, 7];
    // console.log(Math.max(marks));// NaN
        // but "Math.max" cannot take array as an input

    // console.log(Math.max(marks[0], marks[1], marks[2]));// 200
        // Instead we can write like this but it will become long codes for bigger arrays

    // console.log(...marks);// 4 5 200 7
        // this spread operator will spread all the values individually
        // so this can be used in the above line to get the biggest number

    // console.log(Math.max(...marks));// 200

    const [...h1] = [10, 20, 30, 40, 50, 60];
    console.log(h1);
        // when destructuring is used it act as rest operator and prints the rest values as an array
    console.log(...h1);
        // when called seperately it act as spread operator and prints the values individualy
    
    // NEED MORE CLARITY