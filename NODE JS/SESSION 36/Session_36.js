// DATABASE
/*  special software for storing data  
      Database lives in the cloud
      google drive, oneDrive, dropbox etc., they are not cloud they can only store data but they cant run software
      cloud is nothing but its a pc where other copnaies rent it
      AWS is a leading cloud company      
        */

// WHY WE NEED A SPL SOFTWARE LIKE DATABASE TO STORE DATA?

// STRUGGLE OF GETTING THINGS
const data = `
            1,Santhiya,B25WE
            2,Madhan,B26WD
            3,Ashih,B28WD
            4,Rakesh,B27WD`;

// WE NEED TO GET RAKESH DETAILS WHICH IS SAVED IN THE "LOCAL DISK: D AS Student.txt"
console.log(
  data
    .split("\n")
    /* "\n" => new line character. splitng by every new line*/
    .find((row) => row.split(",")[1] === "Rakesh")
    /* "find" is a method same like "map". returns the first element that passes the condition in the array */
    .split(",")[2]
);

// RAM VS SSD vs HDD
/*  ssd is 5 to 10x faster than hdd
          ram is 100 to 1000x faster than ssd
          thats why we dont use ram for storage(which is costlier for small size itself). it is cheaper to use ssd instead of ram 
          cache is 1000x faster than ram(cache memory size is 3 t0 4 mb only )*/

/*  database automatically optimise the data availabilty it will move the frequently required files from ssd to ram or to cache files based upon the users activity thats why database is very much needed
        querying(getting requred data) becomes easier
        CRUD is easy
        backups are done automatically
        we can undo things easily
        performance is also better */

// SCALING
/*  VERTICAL SCALING:
      increasing pc specs(ram) to handle the load 
        
    HORIZONTAL SCALING:
      adding more pc's rather than increasing the pc specs*/

// TYPES OF DATABASE=
/*  SQL and NoSQL
      SQL:
        generally known as relational databasese
        here data's are stored as tables 
      
      NoSQL:
        generally called Non-relational databases
        here data's are stored as documents  */

/* SQL:
    learn and practice about sql
    here,
      https://sqlbolt.com/lesson/select_queries_with_constraints */
