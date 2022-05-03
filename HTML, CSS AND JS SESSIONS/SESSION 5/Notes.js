//1 - TO ADD PROPERTIES TO AN EXISTING OBJECT:-
	let obj = {};
  	obj["Na me"] = "RAGAVENDIRAN";
    //if the key is having any special charaters or space then it has to be sepearated within qotation inside the box bracket
	obj.Mobile = "9444249040";
		//if the key doesnt have any spl character or spaces then it should be sepearted with "dot" and no need of quotation; 
	obj.School = "Don Bosco";
	console.log("1 =>", obj);

//2 - WHAT IS TRUTHY AND FALSY VALUE:-
	// var value = true;//ragav
	// var value = 2;//ragav
	// var value = "good";//ragav
	// var value = undefined;//akshaya
	// var value = null;//akshaya
	var value = 0;//akshaya
	
	if(value){
		console.log("2 =>", "ragav");
	}
	else{
		console.log("2 =>", "akshaya");
	}
		// truthy values - true, strings, numbers (except "0")
		// falsy values - undefined, null, 0 etc,.
		//JS is the one converting(coercion) the values to falsy and truthy repectively and execute the
			//if statement accordingly.
//3 - RELATIONAL OPERATOR FOR PRIMITVE VS NON PRIMITIVE DATA TYPES
	var a = 1;
	var b = 1;

	console.log("3(1) =>", a === b);//true
		//"true" because it is a primitive data type and it is easy to compare them

	var d = [3,4];
	var e = [3,4];

	console.log("3(2) =>", d === e);//false
		//"false" because it is a non-pimitive data type or reference data type
		//so in case of reference types the value is not directly stored in the variable that it is assigned to
		//instead the value is stored in some address and the address is stored in the variable to which it is assigned to
		//as the variable is having address as the value, the relational operator checks there address.
		//so that only "(d === e)" returned false value
		//as both variable has address to the value that is assigned to it and both the address will be different in the above case
		//thats why we get "false" as output.
	
	var f = d;
	console.log("3(3) =>", f === d);//true
		//here the value is "true" because the variable "f" is assigned with the value that is inside
		//the "d" variable. 
		//the variable "d" has the address of the value that is assigned to it and that address is passed
		//to the "f" variable
		//that's why we get "true" in the above case.
		
		//TAKE THIS AS EXAMPLE
		//d => x1(address of the value "[3.4]" is assigned as value to the variable)
		//e => x2(address of the value "[3.4]" is assigned as value to the variable)
			//value is same but the address is different
		
		// d = f;(value of "d" is stored to "f")(so the address is stored in the f, pointing to the "[3,4]" value)
		//so f => x1  

// 4 - CHANGING THE VALUE OF ARRAY WHICH SHARES SAME ADDRESS (copy by reference):-
	f[1] = 5;
	e[0] = 8;

	console.log("4 =>", d, f, e);//[ 3, 5 ] [ 3, 5 ] [ 8, 4 ]
		//as the address is same for the both variable "f" and "d", any changes in anyone of them will result in both the vaiable
		
		//RELATIONAL OPERATOR FOR PRIMITVE VS NON PRIMITIVE DATA TYPES
		//the above two concepts will apply for the object also

// 5 - WHAT TO DO IF YOU WANT TO COPY AN ARRAY BUT DONT WANT TO SHARE THE SAME ADDRESS (copy by value):-
	//USING FOR LOOP:
		//For loop can be used to store the values in a different array without sharing same address
		//so looping will save all the new values in different address and that address will be assigned as value to the new array
	//USING SPREAD OPERATOR:
		var g = [...d];//"..." is the keyword to represent the spread operator
		
		console.log("5(1) =>", g, d);//[ 3, 5 ] [ 3, 5 ]
		//the value is copied from the "d" to the variable "g" but the "g" has different value
			//in this case
		console.log("5(2) =>", g === d);//false
		//the "false" output is proving that they both are of different address location

		//SPREAD OPERATOR:
			//it spread the values to the specified variable
			
			//ADDING EXTRA VALUES USING SPREAD OPERATOR:
				var t = [...d, 5, 6, "RAGAV"];

				console.log("5(3)", t);//[ 3, 5, 5, 6, 'RAGAV' ]

				var g1 = [4, 7];
				var g2 = [10, 6];
				var t1 = [...g1,...g2];
				console.log("5(4)", t1);//[ 4, 7, 10, 6 ]

// 6 - TEMPLATE LITERAL:-
    //NORMAL METHOD TO PRINT:
    var word1 = "ajaas";
    var word2 = "mega";
    console.log("6(1) =>", word1 +", " + word2 + ". welcome guys!!!");//ajaas, mega. Welcome guys!!!

    	//TEMPLATE LITERAL METHOD(MAKES READABILITY BETTER):
		console.log("6(2) =>", `${word1}, ${word2}. Welcome guys!!!`)//ajaas, mega. Welcome guys!!!
			//gives same result but makes readability better
			//(`) - is called "bacticks"
			//in programming "substitution" is known as "interpolation"
			//so instead of saying "(word1) is substituted"
			//we can say "(word1) is interpolated"

			//WE CAN ALSO WRITE IN MULTIPLE LINES WITH THIS TEMPLATE LITERAL
				console.log("6(3) =>", `
							hai how are you
							i am fine
							what are you doing
							`);

