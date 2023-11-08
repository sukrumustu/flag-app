//*=========================================================
//*                     FLAG-APP
//*=========================================================

//! Fetch All, select one from all solution:


let isError = false;
const getCountriesAll = async function () {
    const url = "https://restcountries.com/v3.1/all";
    try {
        const res = await fetch(url);

        if(!res.ok) {
            isError = true;
            throw new Error(`Data can not be fetched: ${res.status}`);
        };
        const data = await res.json();
        // console.log(rsdata);
        getCountryNames(data);
        renderSelectedCountry(data);
        
        


    } catch (error) {
        console.log(error);
    }

};


const getCountryNames = (data) => {

const selectedCountry =document.querySelector('.select-countries');
data.forEach((country) => {
    const {name:{common}} = country;
    selectedCountry.innerHTML += `
    <option value="${common}">${common}</option>`
    
});
};

const renderSelectedCountry = (data)=>{
    
    
        const countryDiv = document.querySelector(".countries");
        const selectedCountry =document.querySelector('.select-countries');


        selectedCountry.addEventListener("change", ()=>{
            data.forEach((country) => {

                const {
                    capital, 
                    currencies, 
                    flags:{svg}, 
                    languages, 
                    name:{common},
                    region
                } = country;
            
                countryOnDisplay = selectedCountry.options[selectedCountry.selectedIndex];
                // console.log(countryOnDisplay.text);
                // console.log(common);
        
                if(countryOnDisplay.text === common){

                    countryDiv.innerHTML = `

                    <div class="card shadow-lg mx-auto m-3" style="width: 20rem; margin: auto">
                        <img src="${svg}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${common}</h5>
                            <p class="card-text">${region}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <i class="fa-sharp fa-solid fa-landmark-flag"></i> ${capital}
                            </li>
                            <li class="list-group-item">
                                <i class="fa-sharp fa-solid fa-language"></i> ${Object.values(languages)}
                            </li>
                            <li class="list-group-item">
                                <i class="fa-solid fa-coins"></i> ${Object.values(currencies)[0].name}, ${Object.values(currencies)[0].symbol}
                            </li>
                        </ul>
                    </div>
    
                    `
 }
}
)
});  
};

window.onload = getCountriesAll();



//! fetch one-country solution
// const url = "https://restcountries.com/v3.1/name/{name}";

// const fetchCountryByName = (name) =>{


//     const url = `https://restcountries.com/v3.1/name/${name}`;

//     fetch(url).then((res) => {

//         if (!res.ok) {
//             renderError(`Something went wrong: ${res.status}`);
//             throw new Error();
//         };
        
//         data = res.json();
//         return data;
//     }).then((data) => renderCountries(data))
//     .catch((err) => console.log(err));

// };

// const renderError = () => {
//      const countryDiv= document.querySelector(".countries");

//     countryDiv.innerHTML = `
//     <h2>Countries can not be fetched.</h2>
//     <img src="./img/404.png" alt="" />
//     `;
// };

// const renderCountries =(data)=>{
//     console.log(data);
   
//     const countryDiv = document.querySelector('.countries');
//     const {
//         capital, 
//         currencies, 
//         flags:{svg}, 
//         languages, 
//         name:{common},
//         region
//     } = data[0];

//     countryDiv.innerHTML +=`
//     <div class="card shadow-lg mx-auto m-3" style="width: 20rem; margin: auto">
//         <img src="${svg}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">${common}</h5>
//             <p class="card-text">${region}</p>
//         </div>
//         <ul class="list-group list-group-flush">
//             <li class="list-group-item">
//             <i class="fa-sharp fa-solid fa-landmark-flag"></i> ${capital}
//             </li>
//             <li class="list-group-item">
//             <i class="fa-sharp fa-solid fa-language"></i> ${Object.values(languages)}
//             </li>
//             <li class="list-group-item">
//             <i class="fa-solid fa-coins"></i> ${Object.values(currencies)[0].name}, ${Object.values(currencies)[0].symbol}
//             </li>
//         </ul>
//     </div>
    
//     `


// };


// fetchCountryByName("turkey");
// fetchCountryByName("usa");