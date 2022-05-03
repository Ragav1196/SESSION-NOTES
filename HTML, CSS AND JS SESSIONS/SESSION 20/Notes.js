// TO TAKE A "SET TIMEOUT" NUMBER FROM A INPUT FIELD
setTimeout(() => {
    console.log("vaishnavi")
}, 1000*document.querySelector(".time").value);
    // "value" is given here to take the value from the input field

    
// WHAT IF WE WANT TO PRINT SOMETHING AFTER THE ABOVE "VAISHNAVI" IS PRINTED
    setTimeout(() => {
        console.log("vaishnavi")
        
        setTimeout(()=>{
            console.log("Hello Welcome!");
        }, 1000*2)
            // this call back function will get executed after 2 sec the "vaishnavi" is printed
            // this is nesting of call back function
            // if there is many number of nesting like this that is called as call back hell or pyramid of doom 
            // pyramid of doom will be hard to read and understand the codes

    }, 1000*document.querySelector(".time").value);

// USING CALL BACK HELL FOR COUNTDOWN
    let input = document.querySelector(".countdown");
    setTimeout(()=>{
        input.innerText = "10";
        setTimeout(()=>{
            input.innerText = "9";
            setTimeout(()=>{
                input.innerText = "8";
                setTimeout(()=>{
                    input.innerText = "7";
                    setTimeout(()=>{
                        input.innerText = "6";
                        setTimeout(()=>{
                            input.innerText = "5";
                            setTimeout(()=>{
                                input.innerText = "4";
                                setTimeout(()=>{
                                    input.innerText = "3";
                                    setTimeout(()=>{
                                        input.innerText = "2";
                                        setTimeout(()=>{
                                            input.innerText = "1";
                                            setTimeout(()=>{
                                                input.innerText = "HAPPY INDEPENDENCE DAY";
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);

// TO BUILD A TEXTAREA AND TO SHOW HOW MANY INPUTS CHARACTERS ARE BEING TYPED IN LIVE
    {function count_letters_1(){
        let char = document.querySelector(".tweet_1").value;
        let char_length = char.length;
            // to estimsate the length of the characters i input field
        let char_length_update = document.querySelector(".update_num_1");
        // char_length_update.innerText = `${char_length}/20`;
            // ANOTHER WAY
            char_length_update.innerText = char_length + "/20"; /* DOUBT 1 */
    }}

    // TO KEEP THE INPUT FIELD SAVED EVEN AFTER REFRESHING THE PAGE
        // goto inspect elements => application => side panel => local storage
        // here we can save the data we entered in the input field 

        localStorage.setItem("store", "hello");
            // this will store the data as a key value pair
        console.log(localStorage.getItem("store"));
            // with this we can retrieve the stored data

        // WE CAN CALL THE ABOVE FUNCTION
            function count_letters_2(){
                let char = document.querySelector(".tweet_2").value;
                localStorage.setItem("tweet_2", char);
                    // this will add whatever we type in the field to the local storage as value to the "tweet" key
                    // this value will change whenever the input field charecters are changed
                let char_length = char.length;
                    // to estimsate the length of the characters i input field
                let char_length_update = document.querySelector(".update_num_2");
                // char_length_update.innerText = `${char_length}/20`;
                    // ANOTHER WAY
                    char_length_update.innerText = char_length + "/20"; /* DOUBT 1 */
            }
            console.log(localStorage.getItem("tweet_2"));                
            document.querySelector(".tweet_2").value = localStorage.getItem("tweet_2");
                // this will print whatever stored in the key "tweet" every time we refresh
            
            // THERE IS A BUG IN THE ABOVE CODE
                // whenever we refresh the character length will not get updated it will be shown as zero because the above function is not called until we type a input
                // so we can call it manually for every refresh so that the character length will get updated
            count_letters_2();
                





// DOUBTS
    // DOUBT 1
        // can we put comma instead of +