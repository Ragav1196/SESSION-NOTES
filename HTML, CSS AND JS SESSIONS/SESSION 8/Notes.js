//  XHR:-
    // XHR - XMLHttp request
        // XHR is used to get data from the server

        const get_blogs = () =>{
            const xhr = new XMLHttpRequest();
            console.log(xhr);
                //Creating an Http request
                // "xhr" can be anything. it is just a variable
                // "new" is part of syntax. will learn more about it later after learing "class"
            xhr.open("GET", "https://616bc2b216c3fa00171717bf.mockapi.io/users");
                // "open" is used to open a request
                // the type of request that we are going to make is specified here
                // "GET" is the request method used to retrieve data. as we are trying to get information from a server "GET" is used
                // then the URL from where the data need to retrived is specified
                
            xhr.responseType = "json";
                // after that we need to specify what kind of responce we are gonna get
                // we need to specify what type of format we are gonna get the data in
            
            xhr.onload = () =>{
                console.log(xhr.response);
                const blog = xhr.response;
                for(let users of blog){
                    console.log(users);// prints only the array elements                    
                }
            };
                // we need to specify after getting the responce what to do with it
                // here we are gonna print it on the screen

            xhr.send();
                // After opening a request we need to send that request so "send" is used here
            };

            get_blogs();
                //Calling the function
                
// OOPS:-
    // OOPS - Object Oriented Programming Language
    // class is introduced in javascript because of the continous request from java people who is changing over to the javascript from java
        
    // CLASS:-
        class car{
            constructor(Name, Wheels, Doors, Engine){
                this.Name  = Name;
                this.Wheels = Wheels;// "this" is used to associate the "wheels" to the car
                                        // so "This" points to the car
                this.Doors = Doors;
                this.Engine = Engine;
            }
        }
    // CREATING THE OBJECT:
        // instantiating means creating an object from the class
            const ferrari = new car("Ferrari", 4, 2, "v12");// whenever object is to be created for a class "new" keyword is used
                // class is used to easily create object over already defined properties
                // the keyword "new" is used to assossiiate the values given inside the bracket to the "constructor" field
                // so when value is given inside the bracket the values are assigned to the properties inside the "contructor"
            console.log(ferrari);// car { Wheels: 4, Doors: 2, Engine: 'v12' }
            console.log(typeof(ferrari));// object
            console.log(typeof(car));// function
            const venue = new car("Venue", 4, 4, "v3");
            const bmw_x6 = new car("Bmw X6", 4, 4, "v6");
            const toyota_lancruiser = new car("Toyota Landcruiser", 4, 5, "v8");
            console.log(ferrari, venue, bmw_x6, toyota_lancruiser);
        
        // ANOTHER EXAMPLE:-
            class Account {
                constructor(name, accno, balance){
                    this.name = name;
                    this.accno = accno;
                    this.balance = balance;
                }
            //CREATING A METHOD TO PRINT BALANCE:
                get_balance() {
                    return "THE BALANCE IS: " + this.balance;
                }
                // the above function is called class methods or member function
                // when a funciton is used inside a object that is known as methods

            // CREATING A METHOD FOR WITHDRAW:    
                withdraw(amount) {
                    if(amount < this.balance){
                        this.balance = this.balance - amount;
                        return this.get_balance();
                    }
                    else{
                        return "AMOUNT IS EXCEEDING BALANCE :" + this.balance;
                    }
                }
            }

                const govardhan = new Account("govardhan", 123, 1000000);
                const arul = new Account("arul", 124, 200000);
                const vaishnavi = new Account("vaishnavi", 125, 400000);

                console.log(arul);// Account { name: 'arul', accno: 124, balance: 200000 }
                console.log(arul.balance);// 124
                    // we can call directly like this but this is not a correct way to call
                    // so instead method is used to call the "arul.accno" for more security
                    //refer the above created method "CREATING A METHOD TO PRINT BALANCE" to 
                    // know how to call a object in class
                
            // CALLING THE ABOVE CREATED METHOD FOR PRINTING BALANCE: 
                console.log(govardhan.get_balance());// THE BALANCE IS: 1000000
                console.log(arul.get_balance());// THE BALANCE IS: 200000
                console.log(vaishnavi.get_balance());// THE BALANCE IS: 400000
                
            //CALLING THE WITHDRAW METHOD:
                console.log(vaishnavi.withdraw(5000000));
