// TO GET ALL THE FLAGS AND DETAILS FROM THE WEBSITE
fetch("https://restcountries.com/v2/all")
.then((data)=> data.json())
.then((countries)=>{
    countries.forEach((data) =>{
        console.log(data);

        const element = document.querySelector(".example_4")
        // element.innerHTML = `<h3>${data.country}</h3>`
            // if there is no "+" symbol then the countries gets over written again and again. 
            // so at last we end up with a single countries on the page

            // DOUBT
                // why it is not printing the "method - 3" on the HTML page
        element.innerHTML += `
        <article class="flag_container">
            <div class="image_container">
                <img src=${data.flags.svg} class="flag">
            </div>

            <div class="detail_container">
                <p>${data.name}</p>
                <p>Population: ${data.population}</p>
                <p>Region: ${data.region}</p>
                <p>Capital: ${data.capital}</p>             
            </div>
        </article>
        `;
    });    
})