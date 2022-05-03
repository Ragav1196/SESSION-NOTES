// PREVIOUS CLASS TASKS EXPLANATION
    const countries = [
        {
            image: "https://flagpedia.net/data/flags/w580/de.png",
            country: "Germany",
            population: "81,770,900",
            region: "Europe",
            capital: "Berlin"
        },
        {
            image: "https://flagpedia.net/data/flags/w580/au.png",
            country: "Australia",
            population: "91,657,312",
            region: "Aus",
            capital: "Canberra"
        },
        {
            image: "https://flagpedia.net/data/flags/w580/in.png",
            country: "India",
            population: "1,3179,984,812",
            region: "Asia",
            capital: "New Delhi"
        },
        {
            image: "https://flagpedia.net/data/flags/w580/kr.png",
            country: "South Korea",
            population: "40,400,000",
            region: "Asia",
            capital: "Seoul"
        },
        {
            image: "https://flagpedia.net/data/flags/w580/us.png",
            country: "United States of America",
            population: "323,947,000",
            region: "North America",
            capital: "Washington,D.C"
        }
    ];

// METHOD - 1
    countries.forEach((data) => {
        console.log(data);
        const countryName = document.createElement("h3");
        const element = document.querySelector(".example_1");
        countryName.innerText = data.country;
        element.append(countryName);

        const countryPopulation = document.createElement("h3");
        countryPopulation.innerText = "Population :" + data.population;
        element.append(countryPopulation);

        const countryRegion = document.createElement("h3");
        countryRegion.innerText = "Region :" + data.region;
        element.append(countryRegion);

        const countryCapital = document.createElement("h3");
        countryCapital.innerText = "Capital :" + data.capital;
        element.append(countryCapital);
    })

    // METHOD - 2
    countries.forEach((data) => {
        console.log(data);
        const countryName = document.createElement("h3");
        const element = document.querySelector(".example_2");
        countryName.innerText = data.country;

        const countryPopulation = document.createElement("h3");
        countryPopulation.innerText = "Population :" + data.population;

        const countryRegion = document.createElement("h3");
        countryRegion.innerText = "Region :" + data.region;

        const countryCapital = document.createElement("h3");
        countryCapital.innerText = "Capital :" + data.capital;
        element.append(countryName, countryPopulation, countryRegion, countryCapital);
            // one time "append" is enough

            // APPEND VS APPEND CHILD
                // append can be executed with multiple variables but not the append child
                // there are more difference is there learn about it
    })

    // METHOD - 3
    countries.forEach((data) =>{
        console.log(data);

        const element = document.querySelector(".example_3")
        // element.innerHTML = `<h3>${data.country}</h3>`
            // if there is no "+" symbol then the countries gets over written again and again. 
            // so at last we end up with a single countries on the page

            // DOUBT
                // why it is not printing the "method - 3" on the HTML page
        element.innerHTML += `
        <article class="flag_container">
            <div class="image_container">
                <img src=${data.image} class="flag">
            </div>

            <div class="detail_container">
                <p>${data.country}</p>
                <p>Population: ${data.population}</p>
                <p>Region: ${data.region}</p>
                <p>Capital: ${data.capital}</p>             
            </div>
        </article>
        `;     
    });

