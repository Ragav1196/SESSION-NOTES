document.body.innerHTML = `
<!-- TO ADD OR CREATE USERDATA -->
    <div class="addContainer userContainer">    
        <input type="text" name="" id="" placeholder="Enter Your Name" class="addUsername">
        <input type="text" name="" id="" placeholder="Submit Your Pic URL" class="addUserpic">        
        <a onclick="addUser()" class="waves-effect waves-light btn add"><i class="material-icons left">add</i>ADD</a>
    </div>
    <section class="userDataContainer"></section>
    `;

// TO GET OR READ THE DATA
async function getUsersData() {
	const data = await fetch(
        "https://616bc2b216c3fa00171717bf.mockapi.io/users/",
         {method: "GET"});
		// we are not specifying the methods for api
		// because its default value is "get"
		// as we are doing the "get" operation we are not specifying it here
    // console.log(data);
	const usersData = await data.json();
    // console.log(usersData);

	const userDataContainerSelect = document.querySelector(".userDataContainer");

    userDataContainerSelect.innerHTML = "";
        // this is used to delete the old list
        // and when below link(GET method) gets appended to the webpage new list will be appended as we have deleted which one we want to delete

	usersData.forEach((user) =>{
		userDataContainerSelect.innerHTML += `
		<div>
            <div>
                <h1><img src="${user.avatar}" class="readPic"></h1>
            </div>

            <div>   
                <p class="readName">${user.name}</p>
                
                <!-- TO DELETE USERDATA -->
				<div class="deleteContainer transform">                    
                    <a onclick="deleteUser(${user.id})" class="waves-effect waves-light btn deleteButton red"><i class="material-icons left">delete</i>DELETE</a>					
				</div>
					<!-- so "onclick" function arguement will be alloted dynamically, which will be passed to the below function when clicked-->
                        <!-- "onclick" is used to call a function whenever that button is clicked-->
                        <!-- we are passing "user.id" to the function. so that the function takes correspondingid number whenever it is called -->                            
                    
                <!-- TO EDIT USER DATA -->
				<div class="editContainer transform">                    
                    <a onclick="editUser(${user.id})" class="waves-effect waves-light btn editButton blue"><i class="material-icons left">edit</i>EDIT</a>					
				</div>

                    <div class="editUserContainer editUserConatiner${user.id} transform">
                        <input type="text" value="${user.name}" name="" id="" placeholder="Enter Your Name" class="editUsername${user.id}">
                        <input type="text" value="${user.avatar}" name="" id="" placeholder="Submit Your Pic URL" class="editUserpic${user.id}">
						<div class="saveContainer">                                                	
                            <a onclick="saveUser(${user.id})" class="waves-effect waves-light btn saveButton green"><i class="material-icons left">save</i>SAVE</a>					                           
						</div>
                    </div>
            </div>
    	</div>
		`;
	});
	console.log(usersData);
}   
getUsersData();

// TO DELETE USERDATA
async function deleteUser(user) {
    console.log(user);
    const data = await fetch(
        "https://616bc2b216c3fa00171717bf.mockapi.io/users/" + user,
        { method: "DELETE" });
        // here "delete" method used to delete the data
        // "user" need to be added at the end, so then only the corresponding id number will be added in the link to dlete that one
    getUsersData();
        // we are calling the "GET" method again so that the updated list will get updated on the webpage
        // problem here is we also have the old list on our webpage until we refresh
        // to avoid this we will delete the old list
            // check above code

}
    // this function will be called on pressing the "delete" button

// TO ADD OR CREATE USERDATA
    async function addUser() {
        // we donot need any id as arguement
        // "id" will be created by the mock api on creation 
        const userName = document.querySelector(".addUsername").value;    
        const userPic = document.querySelector(".addUserpic").value;

        if(userName == "" && userPic == ""){
            alert("Please provide username and user picture URL");
        }
        else{
            const data = await fetch(
                "https://616bc2b216c3fa00171717bf.mockapi.io/users/",
                { method: "POST",
                headers: {"Content-Type": "application/json"},
                    // this header is compulsory to give while creating an data
                body: JSON.stringify({name: userName, avatar: userPic})});            
                    // to the body we need to add the "username and userpic"
                    // as they both are JS object we need to stringify them to convert them into string of objects only which the api accepts
                    // "POST" method has to be used to add data

                const addContainerSelect = document.querySelector(".addContainer")
                addContainerSelect.innerHTML = `
                    <input type="text" name="" id="" placeholder="Enter Your Name" class="addUsername">
                    <input type="text" name="" id="" placeholder="Submit Your Pic URL" class="addUserpic">        
                    <a onclick="addUser()" class="waves-effect waves-light btn add"><i class="material-icons left">add</i>ADD</a>
                `
            getUsersData();  
        }          
    }

// TO EDIT USERDATA
    async function editUser(user) {  
        console.log("rag", user) 
        const editUserConatinerSelect = document.querySelector(`.editUserConatiner${user}`);        
        console.log(editUserConatinerSelect.style.display)
        editUserConatinerSelect.style.display =  editUserConatinerSelect.style.display === "flex" ? "none" : "flex";
        console.log(editUserConatinerSelect.style.display)


        // getUsersData();            
    }

    async function saveUser(user){	
			const userName = document.querySelector(`.editUsername${user}`).value;    
			const userPic = document.querySelector(`.editUserpic${user}`).value;

            console.log(userName, userPic);
	
			const addData = await fetch(
                "https://616bc2b216c3fa00171717bf.mockapi.io/users/" + user,
                { method: "PUT",
				headers: {"Content-Type": "application/json"}, 
                body: JSON.stringify({name: userName, avatar: userPic})
            }
            );
            getUsersData();
        }


        // VENDOR PREFIX:
            // -webkitn - for chromium and safari
            // -moz - for firefox
                // these are the vendor prefix
                // when new propeties are intorduced they are introduced with a vendor prefix during the testing time
                // once it is tested then these vendor prefix will be removed and no longer need to be used

                // also to support in old browser(browser version where the new propety is tested) these vendor prefix need to be used

        let a = [1, 2, 3]
        console.log(a[-1])            

        a[-1] = 4;        
        console.log(a);
            // when index is "0" then its value will be saved as an object in an array
        console.log(a[-1])
            // but it can be called by array method itself

                
            