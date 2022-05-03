// 2 - HOW JS ACCESSING THE HTML FILES

    console.log(document);
        // this shows the complete HTML page

    // 2(1) - TO SELECT USING THE TAG NAME
        {console.log(document.getElementsByTagName('h1'));
            // this doesn't show the content inside "h1"
            // we can only see how many elements are there with the tag name "h1" in the HTML page 
            // if there are multiple elements then they are stored as array inside the "HTMLcollection"
            // but array methods that we use in JS cannot be used on the "HTMLcollection", 
                // except "for each loop"
            // there are some special methods to access those stored elements and to modify them
        const msg = document.getElementsByTagName('h1');
            // we are storing that array into a variable called "msg"
        
        // TO ACCESS THOSE STORED ELEMENTS
            console.log(msg[0].innerText);
                // as it its a array we are calling the individual element using the index
                // "innertext" has to be mentioned to get the texts inside that tag
            console.log(msg[1].innerText);}

    // 2(2) - TO SELECT USING THE CLASS NAME

        {const msg = document.getElementsByClassName("main"); 
        console.log(msg[0].innerText);}

    // 2(3) - TO SELECT USING THE ID NAME 

        {const msg = document.getElementById("content")
            // here the element is not in plural as we give unique "id" to each element in HTML so 
                // there wont be multiple element with same "id"
            // hence it will not be a array

        console.log(msg.innerText); 

        // TO CHANGE THE DATA OF SELECTED ELEMENT 
            msg.innerText = "Glad!!!";}

    // 2(4) - ANOTHER METHOD TO EDIT ELEMENT IN HTML
        {const msg = document.querySelector("#content")
            // but in this method the element has to be mentioned in the format as we do incase of 
                // CSS to select a element
        console.log(msg.innerText);}

    // 2(5) - TO SELECT MULTIPLE ELEMENT USING QUERY SELECTOR
        {const msg = document.querySelectorAll(".main");
        console.log(msg[0].innerText);}
            // as it is multiple element it will be stored as an array
            // if there is multiple element with same class or id or tag and we use "queryselector" 
                // instead of "queryselectorall" then it select the first element only 

    // 2(6) - TO CREATE A NEW ELEMENT
        // 2(6)(1) TO ADD TO BODY
            {const msg = document.createElement("p");
                // this create a empty element with tag "p" and stored it in variable "msg"
            msg.innerText = "RAGAVENDIRAN";
                // this add this message to the element with tag "p"
                // but it will not print the element in the webpage until we specify where to print
            document.body.append(msg);}
                // this specify where to print that Element
                // here we are specifying body
                // so it get printed at the bottom of the body
                // it is not that it can be printed only using body
                // we can print any where we want but we have to specify the position

        // 2(6)(2) - TO ADD TO OTHER THAN BODY
            const msg = document.getElementsByClassName("new_element_div");
                // select the element
            const tag_name = document.createElement("p");
                // create new element
            tag_name.innerText = "AKSHAYA";
                // add text to the element
            msg[0].append(tag_name);
                // print the element
                // intead of "document.body" we use the variable where the container, to which the 
                    // element has to be printed is stored

    // 2(7) - HOW TO ADD ATTRIBUTES
        const add_attribute = document.querySelector(".add_attributes_input");
        add_attribute.setAttribute("placeholder", "ENTER YOUR NAME");  
            // attribute name and value has to be given          

        add_attribute.setAttribute("style", "background:skyblue");
            // this will not be added to CSS file instead it will be added as inline style in the 
                // HTML element

        // OTHER METHOD
            // add_attribute.style.background = "skyblue";
                // this method is helpfull when we want to pass value through variable
                // refer session 18 task given by mentor

    // 2(8) - TO ADD LIST ITEMS THROUGH JS
        // 2(8)(1) - METHOD - 1 => WRONG
            const add_list = document.querySelector(".add_list_ul");
            // add_list.innerText = 
            //     `<li>BRIYANI</li>
            //      <li>BIkE RIDING</li>
            //      <li>COOKING</li>`
                    // if we get try to print like this then the element will be printed as a txt 
                        // only including the tags
        
        // 2(8)(2) - METHOD - 2 => USING TEMPLATE LITERAL(EASY ONE)
            add_list.innerHTML = 
                `<li>BRIYANI</li>
                <li>BIkE RIDING</li>
                <li>COOKING</li>`
                    // so we use this method to add list items to the elemenet
                    // we should use "innerHTML"

        // 2(8)(3) - METHOD - 3 => LONG METHOD
            // const list_item_1 = document.createElement("li")
            // list_item_1.innerText = "BRIYANI";

            // const list_item_2 = document.createElement("li")
            // list_item_2.innerText = "BIKE RIDING";

            // const list_item_3 = document.createElement("li")
            // list_item_3.innerText = "COOKING";

            // add_list.append(list_item_1);
            // add_list.append(list_item_2);
            // add_list.append(list_item_3);
                // this is a long method to creat list instead we can use "method - 2" which uses template literal

    // 2(9) - USING TEMPLATE LITERAL TO EASILY ADD ELEMENT TO HTML
        const new_element = document.querySelector(".new_element")
        new_element.innerHTML = `<p>RAGAV</p>`

                