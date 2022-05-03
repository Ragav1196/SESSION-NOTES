// NODE JS CONT.:
console.log("Hello, world");
// PS E:\GUVI\ZOOM CLASS NOTES\MBC BATCH 28\VS CODE\PROGRAMS\REACT SESSIONS\SESSIONS\session 26\src\SESSIONS LIST\SESSION 39>
// go to this above path and type node "file name" in terminal to see the result

const sum = (a, b) => a + b;
console.log(sum(4, 5));

// CREATING COMMANDS FOR COMMAND LINE USING NODE JS:
/*      we have a global variable "process" which has a key called "argv" */
console.log(process.argv);
/* 
    it returns an array of strings
    containing the path of the files and the values that we gave
*/

/* 
    const num1 = process.argv[2];
    const num2 = process.argv[3];
 */

// above two codes are done using destructuring
const [, , num1, num2] = process.argv;

console.log(sum(+num1, +num2));
/* 
    so this returns the sum of value that we give in command line
 */

/* 
WHAT NODE JS IS MISSING
    DOM is not available in node JS
        so there is no global variable like window, document as we have in browser

    instead of this we have a global variable called global in node js
        this variable contains the methodes like setInterval, setTimeout etc,. that are part of window object

NODE JS WORKING:
    node JS is created from the chromes v8 engine only
    on top of the v8 engine they added some binding to give access to local files and the node js created
*/
