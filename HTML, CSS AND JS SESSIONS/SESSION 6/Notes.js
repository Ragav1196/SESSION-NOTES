// 1 - JS VERSIONS:
  	//ES6
    	//The backticks and spread operator are part of ES6
    	//ES6 => ECMA SCRIPT 6
    	//ES6 was released in 2015
		
	// ES5
		//ES5 got released in the year 2009
    	// ES5 to ES6 there were a long gap and lot of new features were introduced with a new version(ES6) in the year 2015
    	//so that it has become difficult for the browsers to implement those new features as well as the developers also 
			// felt difficult to cope up with the new features all of sudden
    	//so to avoid this situation in future JS decided to launch new versions every year
    	//they started naming the new versions of the js with the year it is getting launched
    	//like,
    	  //ES2016
    	  //ES2017
    	  //ES2018 etc,.
// 2 - HOISTING:-
	//VAR:
		//1ST EXAMPLE:
			// console.log("2(1) =>", a);//undefined
			// var a;

		//2ND EXAMPLE
			// console.log("2(2) =>", a);//undefined 
			// var a = 5;
			// console.log("2(3) =>", a);//5

		//for above both the cases it become undefined and we have been taught that it is because of the "hoisting" but there 
			// is no spec like "hoisting" in javascript
	
		//THE REAL REASON OF GETTING "UNDEFINED" IS
			//in c and c++ there is compilation process which will convert the codes into binary and process the program codes
			//but incase of JS it doesnt get compiled like c and c++ but it will get compiled which is called JIT
		
		//JIT => JUST IN TIME COMPILATION
			//JS works in 2 pass system
			//1st pass => compilation
			//2nd pass => execution
			
			//there is two guys 
				//JS guy(interpreter)
				//context guy(execution context)
				//they both talk to eachother
			
			// whenever the JS run a code it runs it in the above mentioned 2 pass system
				//in the 1st pass it will look for only the declaration steps like "var a; & var a=5;". 
					// and only stores the variable.
				// in the 2nd pass it executes every lines and stores the variable value as it move downward through
					// the program
			
	//DECLARATION:
		//when var,const, let or a function keyword is used that is known as declararion
			
	//PROCESS STEPS(INCASE OF "VAR - 2ND EXAMPLE"):-
		//1ST PASS:
			//in the 1st pass the JS guy(interpreter) commands the context guy(execution context) to just remember the variable
				//  name no need to worry about the value
			//so incase of our 2nd example after the 1st pass the context guy(execution context) just remember the variable 
				// name "a" not its value "5".
			//instead of "5" the context guy(execution context) stores the value "undefined" on its own
		
		//2ND PASS: 
			//now the 2nd pass happens and it comes to the first execution line for the variable "a" and the JS guy
				// (interpreter) asks the context guy (execution context) if he remembers the variable "a"
			//context reply "yes" and he remembers that he stored the value of "a" as "undefined" and tells the JS guy
				// (interpreter) the value of "a" is "undefined".
			//so now for the first line of the code "undefined" is printed on the console
			//after that 2nd pas reached the next line and JS guy(interpreter)s tells context guy(execution context) to store 
				// "5" as value for the "a"
			//now the "a" variable with a "undefined" value will be assigned with "5" as new value
			//when the 2nd pass is going to the next line again JS guy(interpreter) asks context guy(execution context)
				//if he know "a" and what is its value. as "a" is assigned "5". context guy(execution context)
				//reply with its value "5"
			//that is why "5" is printed on the console
			
	//LET & CONST:
		// console.log("2(4) =>", b);//ReferenceError: Cannot access 'b' before initialization
		// let b = 10;
		// console.log("2(5) =>", b);//10

		//PROCESS STEPS:
			// 1ST PASS:
				//process happens same like "var". it stores the variable in the 1st pass  
				//but this time the JS guy(interpreter)s strictly commands context guy(execution context) not to initialize 
					// the value of "b".
			//2ND PASS:
				//when the JS guy(interpreter) is asking the context guy(execution context) for the variable "b". the 
					// context guy(execution context) says that he remembers the variable but not have initialized the 
					// value of "b"
				//so a error will be shown in the console as mentioned above.

				//so "var, let and const" all are remembering the variable but not the value 
					//incase of "var" "undefined" is assigned as value
					// incase of "let and const" the value is not initialized

// 3 - DIFFERENCE BETWEEN VAR, LET AND CONST:-
  	//VAR:
		// var can be redeclared
			// var r = 5;
			// var r = 10;			
			// console.log("3(1) =>", r);//10
        
    	// var can be reassigned 
			// r = 15;
			// console.log"3(2) =>", (r);//15
  
  	//LET:
		//let cannot be redeclared
			// let r1 = 10;
			//let r1 = 45;
			// console.log("3(3) =>", r1);//Identifier 'r1' has already been declared

		// LET CAN BE REASSIGNED
			// r1 = 30;			
			// console.log("3(4) =>", r1);//30	 

  	//CONST:
	  	//const cannot be reassigned or redeclared
			// const r2 = 10;
			// r2 = 40;
				// console.log("3(5) =>", r2);//Assignment to constant variable.	
			// const r2 = 12;
				// console.log("3(6) =>", r2);//Identifier 'r2' has already been declared			

//4 - SCOPE:-
  //scope is the lifetime of a variable
  
  //BLOCK SCOPE:
    //VAR:
      // var c1 = 6;
      // //this is a global scope
      // function nice(){
      //   var b1 = 5;
      //   //this is functional scope
      // }
      // console.log("3() =>", b1);//b1 is not defined
      // //the error is because "b1" is accesibe only inside the funtion.
      // //"var" is a functional scope
      // // when "var" is declared outside of a function then it becomes global scope
  // FUNCTIONAL SCOPE:
    //LET & CONST:
      // {
      //   let t1 = 20;
      //   var t2 = 50;
      //   //var is not a block scope; "var" is a functional scope
      //   //so its visibilty doesnt end within the curly brackets
      // }
      //   //whatever inside this curly bracket is known as "Block Scope"
      //   //"let & const" are block scope; outside the block scope they dont have the visibilty
      //   //so we cant use them outside the curly bracket

      //   console.log("3() =>", t1);//ReferenceError: t1 is not defined
      //   //the error is because as they both are functional scope and called outside the scope
      //   console.log("3() =>", t2);//50
      //   //it doesnt throw an error; as "var" is functional scope and there the "var" is not inside a function. 

  //EXAMPLE 1:
    // function fun(){
    //   console.log("3() =>", "THE OLD PRICE IS", price); //undefined
    //   //same story happens as explained above in the JIT;
    //   var price = 400;
    //   console.log("3() =>", "THE DISCOUNTED PRICE IS", price);//400 
    // }
    // fun();
  //EXAMPLE 2:
    // var price = 500;
    // //this global variable will not be considered by the call that is happening 
    //   //inside the functional scope
    // //first the call will only be given to the local variable; if the local variable
    //   // is not available there then the global variable will be considered
    // //so there wont be any changes in the JIT operation; as executed in the example 1
    //   //here also the execution happens the same way

    // function fun(){
    //   console.log("3() =>", "THE OLD PRICE IS", price); //undefined
    //   //same story happens as explained above in the JIT;
    //   var price = 400;
    //   console.log("3() =>", "THE DISCOUNTED PRICE IS", price);//400 
    // }
    // fun();

  //EXAMPLE 3:-
    var price = 500;

    function fun(){
      console.log("3() =>", "THE OLD PRICE IS", price);//500
      // var price = 400;
      console.log("3() =>", "THE DISCOUNTED PRICE IS", price);//500
    }
    fun();
    //as there is no local variable inside the functional scope, the global variable
    //is considered for the call operation
  //EXAMPLE 4:
    // var price = 800;
    // function fun1(){
    //   var price = 500;
    //   //the variable which is next nearer to the function is only used so only 
    //     //"var price = 800;" is not considered
    //   //this is known as lexical scope
    //     // Lexical scope operation is common for "var, let and const"

    //   function fun(){
    //     console.log("3() =>", "THE OLD PRICE IS", price);//500
    //     // var price = 400;
    //     console.log("3() =>", "THE DISCOUNTED PRICE IS", price);//500
    //   }
    //   fun();
  
    // }
    // fun1();
                    
  // EXAMPLE 5:
    // function fun4() {
    //   for(let i=0; i<10; i++){

    //   }
    //   console.log("3() =>", i);//ReferenceError: i is not defined
    //   // undefined is because that "let i" is a block scope
    //   // and called outside the block
    // }
    // fun4();
  
    //EXAMPLE  6:
      // function fun5(){
      //   for(var i=0; i<10; i++){
      //     console.log("3() =>", i);//(0-1) is printed next next line
      //   }
      //   console.log("3() =>", "outside curly bracket", i);//outside curly bracket 10
      //   //"var i=0" is a functional scope and called inside the function itself
      // }
      // fun5();

//LOOPS:-
  //NORMAL FOR LOOP:
    //normal for loop can be used for an array but not for the object
  
  //FOR IN LOOP:
    //for in loop can be used for both the object and an array
    //for in loop use index as the variable inside the loop                  
    // var arr = [100, 4, 10];
    // for (var index in arr){
    //   console.log("3() =>", index);//0
    //                      //1
    //                      //2
    // }
  
  //FOR OF LOOP:
    //for OF loop can be used for an array but not for the object
    //for of loop use value as the variable inside the loop
    // var arr = [100, 4, 10];
    // for (var value of arr){
    //   console.log("3() =>", value);//100
    //                      //4
    //                      //10
    // }  
  
  //FOR EACH LOOP:
    //for each loop can be used for an array but not for the object                  
   
// FUNCTION:-
  
  // TYPES OF FUNCTIONS:-
  
  //ANONYMOUS FUNCTION:
    //it is a function without name
    // const y2 = function(){
    // //here the function is assigned to a variable instead of giving name to the function
    //   console.log("3() =>", "hi");//hi
    // };
    // y2();
    //anonymous function is called using its variable name

  //IIFE:-
    //IIFE => Immediately Invoked Function Expression
    //this function doesnt have a name and also not assigned to any variable
    //those function are called IIFE
    // (function(){
    //   console.log("3() =>", "hiiiii");
    // }) ();//hiiiii
    // //here the function is called immediately

  // REDECLARING OUTSIDE ANY FUNCTION:-
    // Can be redeclared outside the function as "var, let and const" scopes are locked inside the function and curly bracket
    (function (){
      var a = 51;
      let b = 90;
      const c = 100;
      console.log("3() =>", "HAI");// HAI
    })();

      // console.log("3() =>", a);// ReferenceError: a is not defined
      // console.log("3() =>", b);// ReferenceError: b is not defined
      // console.log("3() =>", c);// ReferenceError: c is not definedS
  
    var a = 51;
    let b = 90;
    const c = 100;

    console.log("3() =>", a);// 51
    console.log("3() =>", b);// 90
    console.log("3() =>", c);// 100
