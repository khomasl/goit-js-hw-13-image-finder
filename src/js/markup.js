import { result } from "./refs.js";

export function renderedCountriesList(markup){
    result.innerHTML = createCountriesListMarkup(markup);
}

export function renderedCountryData(country) {
    result.innerHTML = createCountryDataMarkup(country);
}
///////
function createCountriesListMarkup(countries){
    const listCountries = countries.map(country => `<li>${country.name}</li>`).join('');
    return `<ul class="js-list">${listCountries}</ul>`;
}

function createCountryDataMarkup(country){
    const listLanguages = country.languages.map(language => `<li>${language.name}</li>`).join('');
    //const listLanguages = `<li></li>`;

    return `
      <p class="country__name">${country.name}</p>
      <div class="country">
        <div class="data">
            <p class="country__data">Capital: <span>${country.capital}</span></p>
            <p class="country__data">Population: <span>${country.population}</span></p>
            <p class="country__data">Languages:</p>
            <ul>
                ${listLanguages}
            </ul>    
        </div>
        <div class="flag">
            <img src=${country.flag}
                 width=300
                 height=200
            >
        </div>
      </div>  
    `;
}