// FETCH
    // it is a method which will return a promise object
    // as we created a function for a promise in previous session task which return a promise object, this is  inbuild method which will return a promis object
    // fetch takes in url as the parameter
    
	// TO GET COUNTRIES
		{fetch("https://restcountries.com/v3.1/all")
			// it return a promise of the data from that link having JSON object
		.then((data)=> data.json())
			// it converts the promise object of JSON object into JS object
		.then((countries) => console.log(countries))}
		
	// TO GET POPULATION MORE THAN 1 CR	
		{fetch("https://restcountries.com/v3.1/all")    
		.then((data)=> data.json())
		.then((countries) => {
			for(let data of countries){
				// loop to get the data from the array
				if(data.population >= 10000000){
					console.log(`${data.name.common} => ${data.population}`);
						// "data.name.common" is to print the object inside a object 
				}            
			}
		});}

	// VARIABLE DECLARED OUTSIDE THE (.then) CANNOT BE USED WITHIN (.then) METHOD
		let x;
		{fetch("https://restcountries.com/v3.1/all")    
		.then((data)=> data.json())
		.then((countries) => {
			x=countries;	
		});
	}
	console.log(x);
		// this will return "undefined"
		// the reason being, promise is also a part of web apis not of JS
		// so this gets executed in the web apis
		// in call stack the variable x is console logged before the fetch method comes into action
		// as we know that the codes executed from web apis goes to callback queue and wait there until the call stack is empty
		// so the fetch method will wait there untill the console logging code execution
		// so that only we get "undefined"

// Async and Await
	// this is alternative for the ".then"
// function getAllCountries() {
// 	const data = await fetch("https://restcountries.com/v3.1/all");
// 	const countries = data.json();
// 	console.log(countries);
// }
// getAllCountries();
	// this will throw an error because we need to inform JS that we are going to use await
	// to do that we need to mention "async" in the function
	{async function getAllCountries() {
		const data = await fetch("https://restcountries.com/v3.1/all");
			// "await" is typed where ever we want to fetch data
		const countries = await data.json();
		console.log(countries);
	}
	getAllCountries();}

	// WHAT IF WE USED "RETURN" INSTEAD OF "CONSOLE.LOG"
		{async function getAllCountries() {
			const data = await fetch("https://restcountries.com/v3.1/all");
				// "await" is typed where ever we want to fetch data
			const countries = await data.json();
			return (countries);
		}
		getAllCountries();
		const o = getAllCountries();
		console.log(o);}
			// "async" function will always return a promise object
			// so we need to console logged inside the function itself
			// or else we get a promise object on the console
			// or else we can do ".then" on "o"
				// which will get the data from the promise object

// METHODS OF REST API
	/* 
	C - Create => POST METHOD
	R - Read => GET METHOD
	U - Update => PUT OR PATCH METHOD
	D - Delete => DELETE METHOD
	*/

// CREATING A MOCK API
	// i have created a mock api and its link is "https://616bc2b216c3fa00171717bf.mockapi.io/users"

// PRINTING THE CREATED MOCK API DATA ON THE CONSOLE USING THE ABOVE LINK
{async function getUsersData() {
	const data = await fetch("https://616bc2b216c3fa00171717bf.mockapi.io/users");
	const usersData = await data.json();
	console.log(usersData);
}
getUsersData();}

// PRINTING NAME AND IMAGEb  OF THE CREATED MOCK API DATA ON THE WEB PAGE USING THE ABOVE LINK
document.body.innerHTML = `<section class="userDataContainer"></section>`;

async function getUsersData() {
	const data = await fetch("https://616bc2b216c3fa00171717bf.mockapi.io/users");
	const usersData = await data.json();

	const userDataContainerSelect = document.querySelector(".userDataContainer");

	usersData.forEach((user) =>{
		userDataContainerSelect.innerHTML += `
		<h1>${user.name}</h1>
		<h1><img src="${user.avatar}"></h1>			
		`;
	});
	console.log(usersData);
}
getUsersData();

