// 1 - RELATIONAL OPERATOR:
//== VS === original explanation(BURSTING MYTH)
console.log("1(1) =>", 4 == "4"); //true
console.log("1(2) =>", 4 === "4"); //false

// 4 == "4" - check for value only
// 4 === "4" - check for value and data types
// (4 & 5) is wrong statement actual answer is given below

// real reason:
//(3) == allows coercion
//so first string "4" is converted into number "4"
//and then it check if they both are equal or not
//thats why "==" will become true

//(4) === doesnt allow coercion
//instead it checks directly if number "4" is equal to string ""4"" or not
//thats why "===" become false in the above statement

// 2 - NOT DEFINED:
// console.log("2 =>", g2);
//returns an error with "not defined". if the variable is not declared
//"not defined" is not an datatype. it is an error

// 3 - OBJECT DECLARATION:
var student = {
  name: "vaishnavi",
  class: "B28",
};
console.log("3(1) =>", typeof student); //object
console.log("3(2) =>", student.name); //vaishnavi
//here quotation for "name" is not needed
console.log("3(3) =>", student["name"]); //vaishnavi
//here quotation is needed

// 4 - TO ITERATE AN OBJECT:
for (let key in student) {
  //"key" word is just for reference for the keys in object. it can be anyother word also. but it will represent
  // the object key only.
  console.log("4 =>", key, student[key]);
  //the "key" inside the "student" is not given inside quotation when using loop. Bcoz the "key" word is a varibale
  // which represents the value of the particular key of an object
}
//"for each and map" doesnt work for object; they are for array
//for in can also be used for arrays;
//incase of array the "key" word will represent the index;

// 5 - NULL:
console.log("5 =>", typeof null); //object
//this is a bug for a long time;
//null is actually a value not a datatype
//datatype cant be assigned to a variable
//null will not show automatically unless we use it

// 6 - NAN:
// HOW TO CHECK IF A VARIABLE IS "NaN" OR NOT:-
var t = NaN;
console.log("6 =>", t != t); //true
//the only value that is not equal to "NaN" is "NaN"
//no other value in JS is not equal to it except "NaN"

console.log("6 =>", 4 - "bc"); //NaN
// data type of "NaN" will be a "number"

// 7 - UNDEFINED:
console.log("7 =>", typeof undefined); //undefined
