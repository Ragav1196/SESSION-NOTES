// DRY CODES
    // the code thet doesnt have number of repeatition of same thing

//TO CREATE A BUTTON WHICH IS RESPONSIVE
    function start() {
        console.log("STARTED");
    }
        // when "START" button is pressed it prints "STARTED"
        // this function (start()) is used in html with "on-click" to print "start" when that button is pressed

// TO CHNAGE START AND STOP CHANGING COLOR BY PRESSING BUTTON 
    let time_interval;
        // we defined here so that it can ba accessed outside scope by the "stope_changing_color"
        function start_changing_color() {
        let i = 0;
        let change_color = () =>{
            let arr = ["teal", "skyblue", "violet"];
            let select_body = document.querySelector(".color");
                select_body.style.background = arr[i];
                i++;
                if(i === 3){
                    i = 0;
                }
                return i
        }
        time_interval = window.setInterval(()=> console.log(change_color()), 1000*2);
    }

    function stop_changing_color() {
        console.log("stop")
        clearInterval(time_interval);
    } 

    // CALLBACK FUNCTION
        const shiva = () => console.log("shiva");
            // the above function is known as callback function
            // it is also a combination of arrow and anonymous function
        setTimeout(() => shiva(), 1000*2)
            // once the timeout runsout "shiva" will be called
            // shiva is the callback function
            // timer is the event that is happening

        // to be a callback function,
            // it has to be called when some event occurs

        // function stop_changing_color() {
        //     console.log("stop")
        //     clearInterval(time_interval);
        // }
            // here the event is "clearinterval"
            // callback function is "stop_changing_color"
                // since because it is called when the "STOP CHANGING COLOR" button is pressed

// BROWSER SCOPE
    // it is written in c++ language(chrome - v8 engine)
    // in case od firefox it is written in rust language
    // codes like "document.", "settimeout" etc are not part of JS they are actually part of browser

    // THREAD:-
            // it means that it can process only one process at a time
            // this is used in olden days (pentium 4 - 2004)
            // it may look like that it is doing multiple process like we can open browser and then we can open vs code like that we can use many programs
                // but in reality it is running only one program at a time
            // it is able to switch task quickly that is the reason it look like we are runnuing multiple programs 
            // javascript is using only on one thread that is called as main thread

// WORKING OF CALL BACK FUNCTION BEHIND THE SCENE

// CALL STACK
    // JS runs only in call stack
    // in call stack the codes that come in first will go out last

// WEB API
    // the codes that are not part of JS but part of browser will run in the web api
    // check the below example where the setTimeout will run in the web api not in the call stack
    // so the time for settimeout is calculated in the web api only 
    // when this timer is running the JS codes simulataneously runs in call stack
    // it will not wait for the web api to fininsh calculating time
    // this is known as asynchronus
    // this is to run the codes faster
    // if there is no asynchronous then until the time is running the other codes will not get executed

    // js is single thread but not the browser
    // browser runs both the call stack and web api simultaneously
    // JS codes gets executed one by one in the call stack
    // codes that are not part of JS are executed in the web api 

// CALLBACK QUEUE
    // the codes that are executed in web api will come to the callback queue and wait there until the call stack is empty(until the call stack ahs executed all the JS codes)
    // we have a "even loop" which  will do the job of checking if the casll stack is empty or not
    // so if a timer is over then it doesnt mean that it is executed
    // even after the timer is over it will wait in the callback queue until the call stack is empty
    
    // IF WE HAVE TWO TIMEOUT
        // then both od them will run simultaneously and which one has got completed first will enter the callback queue first
        // callback queue works oposite to the call stack 
        // here codes that come in first will go out first
        // so the timeout which completes first will enter the callback queue and leave it first when the call stack is empty

        setTimeout(function timeout1() {
            console.log("click the button!");
        }, 10000);

        setTimeout(function timeout2() {
            console.log("click the button!");
        }, 1000);

        setTimeout(function timeout3() {
            console.log("click the button!");
        }, 5000);

// MAIN EXAMPLE
    console.log("hello");

    setTimeout(function timeout() {
        console.log("click the button!");
    }, 2000);
        // this is the code that runs in web api

    function sum(a, b){
        let c = a+b;
        return c
    }

    for(let i=0; i<5; i++){
        let d = sum(1, i);
            // this code calls the function
            // until the function returns a value this will stay in the call stack
            // so it comes to call stack first and goes out last after the function returning a value
        console.log(d);
    }

    console.log("welcome to loupe");
        
        // run tha above examples in this link to knoe about the working of call stack, webapis, callback queue => http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coImhlbGxvIik7DQoNCiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIHRpbWVvdXQoKSB7DQogICAgICAgIGNvbnNvbGUubG9nKCJjbGljayB0aGUgYnV0dG9uISIpOw0KICAgIH0sIDIwMDApOw0KDQogICAgZnVuY3Rpb24gc3VtKGEsIGIpew0KICAgICAgICBsZXQgYyA9IGErYjsNCiAgICAgICAgcmV0dXJuIGMNCiAgICB9DQoNCiAgICBmb3IobGV0IGk9MDsgaTw1OyBpKyspew0KICAgICAgICBsZXQgZCA9IHN1bSgxLCBpKTsNCiAgICAgICAgY29uc29sZS5sb2coZCk7DQogICAgfQ0KDQogICAgY29uc29sZS5sb2coIndlbGNvbWUgdG8gbG91cGUiKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

    

         