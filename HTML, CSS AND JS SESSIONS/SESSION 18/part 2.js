// console.log(window);
// window.alert("Hello There!!!");
    // it will give a alert whenever page reloads
    // only after acknowledging it we can see the content of the page

// window.confirm("Are You Sure????");
    // same like alert but it has a cancel button with it
    // this "confirm" is useful in the case where our works are unsaved and we need a alert to save that file
// const result = window.confirm("Are You Sure????");
// console.log(result);
    // we can capture the results also
    // what the user has pressed either "ok" or "cancel" button
    // based upon that we can set the action to be made

// window.prompt("Enter your name");
    // this will open a input a field
    // not commonly used these days

// const name = window.prompt("Enter your name");
// console.log(name);
    // this also we can store for our reference

// window.prompt("Enter your name", "RAGAVENDIRAN");
    // 2nd argument is to have a default input in the field

// TIMER:
// window.setTimeout(()=> console.log("Timer ended"), 1000*3);
    // it takes two arguments 
    // first is a function
    // 2nd is a timer
    // timer is in milli seconds => 1000ms = 1s
    // the inner function is executed when the timer ends

// RUNNER:
// window.setInterval(()=> console.log("RAGAV"), 1000*2)
    // here for every two seconds the function will be executed continuously
    // it runsd continuosly until stopped

// TO STOP THE RUNNER:
    // const timer = window.setInterval(()=>console.log("RAGAV"), 1000*2)
    // clearInterval(timer);
        // "clearInterval" will end the "setInterval"
        // here the timer gets stoppen immediately even before it prints anything on the console

// TO STOP THE RUNNER AFTER PRINTING "RAGAV" 3 TIMES
    // const timer = window.setInterval(()=>console.log("RAGAV"), 1000*2)
    // window.setTimeout(()=> clearInterval(timer), 1000*7);
        // here the timer will execute the function after 7 seconds
        // the function is to stop the runner

// ABOVE CODES WILL WORK EVEN THE "WINDOW" IS NOT MENTIONED BECAUSE OF THE LEXICAL SCOPE
    // so it tries to see if there is any other function with the same name and if it doesnt find 
        // it then it executes the function in window this is the lexical scoping


        let i = 0;
        let change_color = () =>{
            let arr = ["teal", "skyblue", "violet"];
                let select_body = document.querySelector("div");
                select_body.style.background = arr[i];
                i++;
                if(i === 3){
                    i = 0;
                }
        }
        window.setInterval(()=> change_color(), 1000*2);