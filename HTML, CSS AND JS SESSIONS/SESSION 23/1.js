// PRINTING NAME AND IMAGEb  OF THE CREATED MOCK API DATA ON THE WEB PAGE USING THE ABOVE LINK
document.body.innerHTML = `
<div class="user-form">
    <input type="text" placeholder="Enter you name" name="" id="" class="add-user-name">
    <input type="text" placeholder="Enter you pic url" name="" id="" class="add-user-avatar">
    <button onclick="addUser()">ADD USER</button>
</div>
<section class="userDataContainer"></section>
`;

async function getUsersData() {
	const data = await fetch("https://616bc2b216c3fa00171717bf.mockapi.io/users");
	const usersData = await data.json();

	const userDataContainerSelect = document.querySelector(".userDataContainer");

	usersData.forEach((user) =>{
		userDataContainerSelect.innerHTML += `
		<h1>${user.name}</h1>
		<h1><img src="${user.avatar}"></h1>  
        <div>
            <button onclick="deleteUser()">DELETE</button>      
        </div>
        <div class="editContainer">
            <button onclick="edit()">EDIT</button>        
        </div> 
		`;
	});
	console.log(usersData);
}
getUsersData();

async function deleteUser() {
    const data = await fetch("https://616bc2b216c3fa00171717bf.mockapi.io/users");
    const usersData = await data.json();
    console.log(usersData.id)
}

function edit() {
    const editContainerSelect = document.querySelector(".editContainer");
    editContainerSelect.innerHTML += `
    <input class="editName" type="text" placeholder="Enter your name">
    <input class="editPic type="text" name="" id="" placeholder="Enter Your pic URL"></input>
    `;
    console.log(document.querySelector(".e").value);
    console.log(document.querySelector(".editPic").value);
}
