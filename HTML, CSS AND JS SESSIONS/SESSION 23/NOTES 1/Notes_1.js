// PRINTING NAME AND IMAGE OF THE CREATED MOCK API DATA ON THE WEB PAGE USING THE ABOVE LINK
document.body.innerHTML = `<section class="userDataContainer"></section>`;

async function getUsersData() {
	const data = await fetch("https://616bc2b216c3fa00171717bf.mockapi.io/users");
        // console.log(data);
	const usersData = await data.json();
        // console.log(usersData);

	const userDataContainerSelect = document.querySelector(".userDataContainer");

	usersData.forEach((user) =>{
		userDataContainerSelect.innerHTML += `
		<div>			
			<h1><img src="${user.avatar}"></h1>	
			<p>${user.name}</p>		
    	</div>
		`;
	});
	console.log(usersData);
}
getUsersData();

// METHODS OF REST API
	/* 
	C - Create => POST METHOD
	R - Read => GET METHOD
	U - Update => PUT OR PATCH METHOD
	D - Delete => DELETE METHOD
	*/
