// SQL WEBSITE EXRECISE => https://sqlbolt.com/
/* 
    Exercise 1 — Tasks
        Find the title of each film ✓ => SELECT Title "selcting column(not case sensitive)" FROM movies "selecting table";
        Find the director of each film => SELECT Director FROM movies "selecting table";
        Find the title and director of each film => SELECT Title, director "comma is to select multiple column" FROM movies;
        Find the title and year of each film => SELECT Title, year FROM movies;
        Find all the information about each film =p> SELECT * "to select all the column" FROM movies;

    Exercise 2 — Tasks 
        Find the movie with a row id of 6 => SELECT * FROM movies where id "where to select the row with condition" = 6 "this is the condition";
        Find the movies released in the years between 2000 and 2010 => SELECT * FROM movies where year between 2000 and 2010 "between is a condition to give results between them(inclusive of the between item given in the condition)";
        Find the movies not released in the years between 2000 and 2010 => SELECT * FROM movies where year not between 2000 and 2010 "not between is a condition to give results not between them";
        Find the first 5 Pixar movies and their release year => SELECT * FROM movies where id between 1 and 5;
        EXTRA COMMAND:
          SELECT * FROM movies where id in (1, 10, 12) " in is to select particular id";
          SELECT * FROM movies where id not in (1, 10, 12) "to select particular id other than the specified";

    Exercise 3 — Tasks
        OPERATORS:
          = or != => case sensitive
          like or not like => same like = or != but case insensitive
          % => to match all the words with the given letter or word
              like "an%" => and => match
                            bat => match
                            sat => match
                            attention => match
                            got => not match
                            DOUBT => CHECK THE VIDE WHAT MENTOR IS SAYING FOR THIS % EXAMPLES. IS THE EXAMPLES CRCT 


          _(underscore) => to match the given word with other words that are exactly one character long not more than that 
                          not like "an_" =>  an => not match
                                              and => match "it has to be one letter longer that the given condition"
                                              andy => not match
        Find all the Toy Story movies => SELECT * FROM movies where Title like "toy%"; 
        Find all the movies directed by John Lasseter => SELECT * FROM movies where Director = "John Lasseter";
        Find all the movies (and director) not directed by John Lasseter => SELECT * FROM movies where Director != "John Lasseter";
        Find all the WALL-* movies => SELECT * FROM movies where Title like "wall-%";

    Exercise 4 — Tasks
        OPERATORS:
          Distinct => removes dublicate rows
          order by asc "to order in ascending(defualt)"/desc "to order in descending" => to order the specified column
          limit => to output only said number of values
          limit with offset => to output said number of values in the limit that is after said number of values in the offset


        List all directors of Pixar movies (alphabetically), without duplicates => SELECT distinct "to avoid duplicatesd" Director FROM movies order by director "to order in alphabetical order(alphabetical order is a default setting)";
        List the last four Pixar movies released (ordered from most recent to least) => SELECT * FROM movies order by year desc limit 4;
        List the first five Pixar movies sorted alphabetically => SELECT * FROM movies order by title limit 5;
        List the next five Pixar movies sorted alphabetically => SELECT * FROM movies order by title limit 5 offset 5;

    Review 1 — Tasks
        List all the Canadian cities and their populations => SELECT city, population FROM north_american_cities where country like "canada";
        Order all the cities in the United States by their latitude from north to south => SELECT city FROM north_american_cities where country like "united states" order by latitude desc;
        List all the cities west of Chicago, ordered from west to east => SELECT * FROM north_american_cities where longitude < -87.629798 order by longitude
        List the two largest cities in Mexico (by population) => SELECT * FROM north_american_cities where country like "mexico" order by population desc limit 2;
        List the third and fourth largest cities (by population) in the United States and their population => SELECT * FROM north_american_cities where country like "united states" order by population desc limit 2 offset 2;
*/

// NORMALIZATION
/*    removing repeatition in the table
      to avoid repeatition we may break single table into multiple tables and get the required infromation by checking these three tables
      for this process we have a special command in SQL. that is JOINS

      REFER VIDEO BOOKMARK */

// PRIMARY KEYS
/*    it is unique key. it shouldnt be repeated and it shouldnt be null(not be empty).
       */

// FOREIGN KEY
/*    
      it helps to join other tables and get things that are required
      mostly primary key in one table would be foriegn key in another table */

// SQL WEBSITE EXRECISE CONT.
/* 
    Exercise 6 — Tasks
      In this task 
        Movies table id is the primary key
        Boxoffice table Movie_id is the foreign key

      Find the domestic and international sales for each movie => SELECT * FROM movies inner join boxoffice "to join boxoffice table with movies table" on movies.id = boxoffice.movie_id "condition";
        we can ignore the box table name if the column names are not repeated in both the table => SELECT * FROM movies inner join boxoffice on id = movie_id;

      Show the sales numbers for each movie that did better internationally rather than domestically => SELECT * FROM movies inner join "join which are common for both the table" boxoffice on movies.id = boxoffice.movie_id where international_sales > domestic_sales;
      
      List all the movies by their ratings in descending order => SELECT * FROM movies 
                                                                  inner join boxoffice on movies.id = boxoffice.movie_id
                                                                  order by rating desc;

    Exercise 7 — Tasks
      Find the list of all buildings that have employees => SELECT distinct building FROM employees ;
      Find the list of all buildings and their capacity => SELECT * FROM Buildings;
      List all buildings and the distinct employee roles in each building (including empty buildings) => SELECT distinct building_name, role FROM Buildings 
                                                                                                         left join "this joins the two table with extra items(items that are not common) from left side table & we have right join which brings extra item from right side of the table" employees 
                                                                                                         on Building_name = Building;                                                                   

      Exercise 8 — Tasks
        Find the name and role of all employees who have not been assigned to a building => SELECT * FROM employees where building is null (to take out rows that dosnt have values);   
        Find the names of the buildings that hold no employees => SELECT * FROM Buildings left join Employees
                                                                  on building_name = building
                                                                  where building is null;                                                                                                       
                                                                                                            
      Exercise 9 — Tasks
        List all movies and their combined sales in millions of dollars => SELECT *, (domestic_sales + International_sales)/1000000 "adding new column with mathematical opearion" as "changing the name of the created column"
                                                                           Total_Sales_In_Millions FROM movies
                                                                           inner join Boxoffice
                                                                           on Id = Movie_id;

        List all movies and their ratings in percent => SELECT title, (rating*10) as Rating_Percentag FROM movies
                                                        inner join Boxoffice
                                                        on id = movie_id;
        List all movies that were released on even number years => SELECT * FROM movies
                                                                   where year%2=0                                                                 

      Exercise 10 — Tasks
        Find the longest time that an employee has been at the studio => SELECT name, Max(Years_employed) FROM employees;
        For each role, find the average number of years employed by employees in that role => SELECT role, avg(years_employed) FROM employees group by "to group elements that are repeated" role;
        Find the total number of employee years worked in each building => SELECT building, sum(Years_employed) FROM employees group by building;                                                                    
       
      Exercise 11 — Tasks
        Find the number of Artists in the studio (without a HAVING clause) => SELECT role, count "to count the number of elements" (role) FROM employees where role = "Artist";
        Find the number of Employees of each role in the studio => SELECT role, count(role) FROM employees group by role;
        Find the total number of years employed by all Engineers => SELECT role,sum(years_employed) FROM employees where role like "engineer";             
        */

// ORDER OF EXECUTION
/*
    SELECT DISTINCT column, AGG_FUNC(column_or_expression), …
    FROM mytable
        JOIN another_table
          ON mytable.column = another_table.column
        WHERE constraint_expression
        GROUP BY column
        HAVING constraint_expression
        ORDER BY column ASC/DESC
        LIMIT count OFFSET COUNT;

          in this order only we have to do the execution. we can miss something in the middle but we cant interchange their position
 */       

// SQL WEBSITE EXERCISE CONT.
/* 
  Exercise 12 — Tasks
    Find the number of movies each director has directed => SELECT director, count(title) FROM movies group by director;
    Find the total domestic and international sales that can be attributed to each director => SELECT director, sum(domestic_sales + international_sales) as total_sales FROM movies inner join boxoffice on Id = Movie_id group by director; 

  Exercise 13 — Tasks
    Add the studio's new production, Toy Story 4 to the list of movies (you can use any director) => INSERT INTO "syntax for inserting new values to the table" Movies
                                                                                                     values "values to be added to thr table is provided here" (4, "Toy Story 4", "Deepa", 2021, 120)

    Toy Story 4 has been released to critical acclaim! It had a rating of 8.7, and made 340 million domestically and 270 million internationally. Add the record to the BoxOffice table. => INSERT INTO Boxoffice
                                                                                                                                                                                            values (4, 8.7, 340000000, 270000000)

  Exercise 14 — Tasks
    The director for A Bug's Life is incorrect, it was actually directed by John Lasseter => update movies set "to update table row" Director = "John Lasseter"
                                                                                             where Title like "a bug's life";

    The year that Toy Story 2 was released is incorrect, it was actually released in 1999 => UPDATE Movies
                                                                                             set Year = 1999
                                                                                             where id = 3;
    Both the title and director for Toy Story 8 is incorrect! The title should be "Toy Story 3" and it was directed by Lee Unkrich => Update movies
                                                                                                                                      set Title = "Toy Story 3", Director = "Lee Unkrich"
                                                                                                                                      where id = 11;   

  Exercise 15 — Tasks
    This database is getting too big, lets remove all movies that were released before 2005. => DELETE FROM "to delete rows" movies
                                                                                                where year < 2005;
    Andrew Stanton has also left the studio, so please remove all movies directed by him. => delete from movies where director = "Andrew Stanton"
 */          
           
    
// INSTAL MONGO DB
