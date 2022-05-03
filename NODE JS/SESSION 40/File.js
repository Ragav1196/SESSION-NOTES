// 2
// first we need to import the package needed to control the file system

const { create } = require("domain");
const fs = require("fs");

// !KEEP ALL THE FILES  IN MAIN FOLDER
// TO READ A FILE
fs.readFile(
  "./Welcome.txt",
  "utf-8" /* to avoid the hexa decimal version and get the the human readable version */,
  (err, data) => {
    console.log(data);
  }
);
// first arguement is a path to the file
// second is a callback function
// third arguement is to say the encoding that we want in
// "fs.read" returns a callBack function
// output will be in hexa decimal

// TO WRITE A FILE
const quote = "RAGAVENDIRAN";
{
  // fs.writeFile(
  //   "./Name.txt" /* file name for the file to be created */,
  //   quote /* the data that need to be wrote */,
  //   (err) /* give a message once the writing is finished */ => {
  //     console.log("Completed Writing");
  //   }
  // );
}

//   this above code will create a file

// TO CREATE N NUMBER OF FILES USING LOOPS
{
  // for (let i = 1; i <= 10; i++) {
  //   fs.writeFile(`./backup/text-${i}.txt`, quote, (err) => {
  //     console.log("completed Writing !!!", `file text-${i}`);
  //   });
  // }
}
/* 
        here the "completed writing" statement will be printed with number not in a sequence 
            this is because the "writeFile" is a asynchornous function like setTimeout
        so whichever comes to the callBack queue first only that will be executed first
 */
//      writefile will always overwrite the already availbale data to the given data in the code

// TO CREATE FILES USING THE INPUT FROM THE TERMINAL
{
  // function createQuotes(noOfFiles, quoate){
  //     for(let i=1; i<=noOfFiles; i++){
  //         fs.writeFile(`./backup/text-${i}.txt`, quote, (err) => {
  //             console.log("completed Writing !!!", `file text-${i}`);
  //         })
  //     }
  // }
  // const [, , noOfFiles] = process.argv;
  // createQuotes(noOfFiles, quote)
}
/* in writeFile method it always override the data that is existing
        to avoid that */

// TO AVOID OVERRIDING
{
  // {
  //   const quote = "\nAKSHAYA";
  //   /*      "\n" to add it in the next line */
  //   fs.appendFile("./Name.txt", quote, (err) => {
  //     console.log("Completed Appending !!!");
  //   });
  // }
}

// TO DELETE A FILE
{
  // {
  //   fs.unlink("./chumma.txt", (err) => {
  //     console.log("Deleted Successfully");
  //   });
  // }
}

// TO READ ALL THE FILE NAMES INSIDE A FOLDER
{
  // {
  //   fs.readdir("./backup", (err, files) => {
  //     console.log(files);
  //   });
  // }
}

// "ERROR" IN ALL CALL BACK FUNCTIONS ABOVE
{
  //   {
  //     fs.readdir("./backup23", (err, files) => {
  //       if (err) {
  //         console.log(err);
  //         /* if any error happens while reading a directory then that error will be console logged */
  //       }
  //       console.log(files);
  //     });
  //   }
}

// TO WRITE THE ABOVE METHOD SYNCHRONIUSLY
{
  //   fs.writeFileSync("./name.txt", quote);
}
/* 
    this is a synchronous method now
    if we use this in a loop then process will happen one by one only
    only when one file is returned then only retuning next file will happen 
*/
