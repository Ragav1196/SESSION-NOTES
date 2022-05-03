// 1
// TO KNOW ABOUT OUR SYSTEM:
//    in nodejs we dont say import for imporing package insteade we use requrie method

const os = require("os");
  // this "os" is a inbuild package in the nodejs
  // "const os" can ne renamed also
  // importing the "os" package using require method

// console.log("Os version", os.version());
  // to know the about the OS
console.log("Free memory", os.freemem());
  // to know the free memory
console.log("Total memory", os.totalmem());
  // to know how much is total memory
// console.log("CPU", os.cpus());
  // to know about the CPU


// const quote = "Live more, worry less";

// const [ , , number] = process.argv

// for (let i = 1; i <= number; i++) {
//   const fs = require("fs");
//   fs.writeFile(`./Text-${i}.html`, quote, (err) => {
//     console.log("completed");
//   });
// }



