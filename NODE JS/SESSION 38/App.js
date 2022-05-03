// DML:
/*  Data Manipulation Language
        commands that manipulate table data is known as DML commands */

// DDL:
/*  Data Definition Language
        commands that manipulate table itself are known as DDL commands */

// DATA TYPES IN SQL:
/* 
        Integer
        Boolean
        For decimals ->
            Float - for small decimal values
            Double - for decimal places upto 12
            Real - for decimal places more than 12
        For text ->
            Character - to store few characters
            VarChar - to store few sentences
            Text - to store many parah
        Date - to store date alone
        DateTime - to store date and time
        Blob - to store videos and images. 
               in database we dont directly store the images and videos 
               we store them inside drive and store that path in the database as blob
     */

// TABLE CONSTRAINTS:
/* 
        Primary key - each value inside it should be unique  
        Autoincrement - values will be incremented automatically when new row is stored
        Unique - the value that is given cant be used again in the table
        Not null - to make it compulsory to not leave it empty
        Check - this is like form validation. only when certain criteria is satisfied it will allow
        Foreign key - it is used to combine two tables
    */

// SQL WEBSITE EXERCISE CONT.
/* 
    Exercise 16 — Tasks



        Create a new table named Database with the following columns:
            – Name A string (text) describing the name of the database
            – Version A number (floating point) of the latest version of this database
            – Download_count An integer count of the number of times this database was downloaded
                    ans:
                        Create table Database (
                                name text,
                                version float,
                                Download_count integer)
        This table has no constraints.

    Exercise 17 — Tasks
    Add a column named Aspect_ratio with a FLOAT data type to store the aspect-ratio each movie was released in. => ALTER TABLE Movies
                                                                                                                    ADD column Aspect_ratio FLOAT;
    Add another column named Language with a TEXT data type to store the language that the movie was released in. 
        Ensure that the default for this language is English. => ALTER TABLE Movies
                                                                 ADD column Language TEXT
                                                                 DEFAULT "English";

    Exercise 18 — Tasks
        We've sadly reached the end of our lessons, 
            lets clean up by removing the Movies table => DROP TABLE IF EXISTS Movies;        

        And drop the BoxOffice table as well => DROP TABLE IF EXISTS BoxOffice;                                                                  
 */

// MONGO DB:
/* 
    it is a non relational database
    incase of relational database we have tables
    but in non relational database we use documents which looks like JSON data type
    here we dont do joins as we do in relational database with tables

    WHAT MONGO DB HAS?
        database
        collection
        documents
			this is the hierachy in Mongo

        Mongo DB uses javascript language            
                                 
    ADVANTAGES:
        no joins needed
        no need to specify null value as like in tables we specify null value for empty cells             
        no schema (no need to mention the data types as we do in SQL)

    in Mongo DB the documents may look like JSON data but they are not
    they are BSON data    
    BSON => Binary JSON   
        we get the data in JSON but store it in BSON format
        this is done to increase the perormance
        as the data that we give to Mongo will be very big compare to the SQL tables
        so it is converted into BSON to avoid the repeated values and unwanted values											

	CRUD OPERATION COMMANDS:
		CREATE:
			insertOne(data, options) => to add one documents
			insertMany(data, options) => to add many documents	
		READ:
			find(filter, options) => to read multiple documents
			findOne(filter, options) => to get only one documnets
		UPDATE:
			updateOne(data, options) => to update one documents
			updateMany(data, options) => to update many documents	
			replaceOne(data, options) => to replace whole data
		DELETE:
			deleteOne(data, options) => to delete one documents
			deleteMany(data, options) => to delete many documents								

	BASIC COMMANDS:
		REFER VLC BOOKMARKS - Mongo online commands	

        USE THE EXAMPLE JSON DATA GIVEN BY MENTOR -> check the chats codepen and also check below
            TO GET THE COMPLETE MOVIE DOCUMENT:
                db.collection.find({})									
                    for find the first argument is filter which will filter according to the query
                        "find(filter, options)"
            
            TO GET MOVIE RATIING GREATER THAN 8:
                db.collection.find({
                    rating: {
                        $gt (Greater Than): 8
                    }
                })   
                
            TO GET MOVIE RATIING GREATER THAN AND EQUAL TO 8:
            db.collection.find({
                    rating: {
                        $gte (Greater Than and Equal To) 8
                    }
                }) 
            
            TO GET MOVIE RATIING LESSER THAN 8:
                db.collection.find({
                    rating: {
                        $lt (Lesser Than): 8
                    }
                })

            TO GET MOVIE RATIING LESSER THAN AND EQUAL TO 8:
            db.collection.find({
                    rating: {
                        $lte (Lesser Than and Equal To): 8
                    }
                }) 

            TO GET MOVIE RATIING OTHER THAN 8:
            db.collection.find({
                    rating: {
                        $ne (Not Equal To): 8
                    }
                }) 
                
            TO GET MOVIE RATIING 7 AND 8.6:
            db.collection.find({
                    rating: {
                        $in: [
                            7, 8.6
                        ]
                    }
                }) 

            TO GET MOVIE RATIING OTHER THAN 7 AND 8.6:
            db.collection.find({
                    rating: {
                        $nin(NotIN): [
                            7, 8.6
                        ]
                    }
                })             

    EMBEDDED DOCUMENTS:
        it is nothing but nested documents
        the maximum number of nexting should be upto 100 levels     
        but it is not good for going beyond 10 itself  
        
        maximum the document size should be 16mb

    DATA TYPES IN MONGO DB:
        Text
        Boolean
        Number
            Integer - small number
            NumberLong - long numbers
            Number decimal - number with decimal points     
        ObjectID - we have seen this in BSON data (it will be with key "id")   
        ISODate  
        Embeded Documents
        Array       

    WHICH IS BETTER DATABASE:
    SQL is good at writing the data
    Mongo is good at reading the data
        so, 
            where we need to retrive more data than creating there we use non relational database like Mongo like in social media
            where we need to create more data than retriving the data there we use relational database like SQL like in share market and banks (where lots of data has to uploaded)               
    
    CREATING DATABASE IN CMD: 
        INITIALIZING:               
            to start Mongo db first type "mongo"
        
        TO SEE ALL THE DBS:
            show dbs -> to show all the databases
                admin   0.000GB
                config  0.000GB
                local   0.000GB
                    these will be the default dbs shown
        
        FETCH/CREATE DBS:
            there is no proper command for creating db
            rather cmd to fetch db is same for creating db
            when there is no db present in the name that u specified to fetch then a db will be created on that name
            
            use ragavdb(db name) -> to fetch/create dbs
                if this name is not there then a db will be created with this name
                until the created database has some data inside it. it will not be shown in the "show dbs" cmd
        
        TO CHECK THE DATABASE IN WHICH WE ARE NOW:
            db

        TO ADD COLLECTION TO THE DATABASE:
            if we add data to the collection it will automatcally create the collection

        TO SEE ALL THE COLLECTION:
            show collections

        TO INSERT MULTIPLE DOCUMENTS TO THE COLLECTION:
            db.movies "collection name".insertMany("data to tb uploaded")
        
        TO LIST THE INSERTED DOCUMENT:
            db.movies.find({})

            TO MAKE IT READABLE:
                db.movies.find({}).pretty()

        once the data is stored inside the collection we can see our db listed in the database list
        
        TO COUNT THE NUMBER OF RESULTS:
            db.movies.find({}).count()

        TO ORDER THE RESULT DATA:
            db.movies.find({}).sort({rating: 1}) - asceding order
            db.movies.find({}).sort({rating: -1}) - descending order

        TO GET THE NUMBER OF RESULTS NEEDED FROM THE FIRST PLACE:
            db.movies.find({}).limit((number of results to be shown))

        TO SKIP THE CERTAIN RESULTS:
            db.movies.find({}).skip((number of results to be skipped from the top))                

        TO SORT BY NAME WHEN RATINGS ARE EQUAL:
            db.movies.find({}).sort({rating: -1, name: 1})    

        TO GET ONLY PARTICULAR KEY FROM THE DATA:
            db.movies.find({}, {name: 1}(second argument - options)) -> gives name alone
            db.movies.find({}, {name: 1, rating: 1}) -> gives name and rating alone
                that "1" is like a boolean value if it is true include it
                1 - inclusion
            
            db.movies.find({}, {name: 0, rating: 0}) -> gives result except name and rating alone
                that "0" is like a boolean value if it is false donot include it
                0 - exclusion                                     

            this options arguement that we are using to select particular key is called projections
            we cannot use mixing of inclusion and exclusion projection
 */

/* 
JSON STRINGIFY DATA GIVEN BY MENTOR
[
    {
       "id":"100",
       "name":"Iron man 2",
       "poster":"https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
       "rating":7,
       "summary":"With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
       "trailer":"https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
       "id":"101",
       "name":"No Country for Old Men",
       "poster":"https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
       "rating":8.1,
       "summary":"A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
       "trailer":"https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
       "id":"102",
       "name":"Jai Bhim",
       "poster":"https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
       "summary":"A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
       "rating":8.8,
       "trailer":"https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
       "id":"103",
       "name":"The Avengers",
       "rating":8,
       "summary":"Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
       "poster":"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
       "trailer":"https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
       "id":"104",
       "name":"Interstellar",
       "poster":"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
       "rating":8.6,
       "summary":"When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
       "trailer":"https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
       "id":"105",
       "name":"Baahubali",
       "poster":"https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
       "rating":8,
       "summary":"In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
       "trailer":"https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
       "id":"106",
       "name":"Ratatouille",
       "poster":"https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
       "rating":8,
       "summary":"Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
       "trailer":"https://www.youtube.com/embed/NgsQ8mVkN8w"
    }
 ]
 */

/* TASK                
    <!-- Task -->
1. Rating of "Baahubali" & "Interstellar" - 8.7 
        => db.movies.updateMany({name:{$in : ["Baahubali", "Ratatouille"]}}, {$set: {rating: 8.7}})
            here the first arguement is to select the movies and 2nd is to update the selected movie
            "$in" to select multiple movies
            "$set" to update
2. Delete all movies < 8 rating
        => db.movies.deleteMany({rating: {$lt: 8}})
            "$lt" -> lesser than
 */
