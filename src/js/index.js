import {notifyAlert, notifyError} from './notify.js';
import debounce from 'lodash/debounce';
import { input, result } from "./refs.js";
import {renderedCountriesList, renderedCountryData} from './markup.js';
import fetchCountries from './fetchCountries.js';

input.addEventListener('input', debounce(onSearchCountryChange, 500));

function onSearchCountryChange(evt){
    evt.preventDefault();
    
    const searchQuery = evt.target.value.toLowerCase();
    
    if (searchQuery === '') {
      result.innerHTML = '';
      return;
    };

    fetchCountries(searchQuery)   
    .then(searchCountries => {
        const numberCountries = searchCountries.length; 
        
        if (numberCountries === 1) {
          renderedCountryData(searchCountries[0])
          return;
        } 

        if (numberCountries <= 10) {
          renderedCountriesList(searchCountries);
          return;
        } 
        
        notifyError();

        result.innerHTML = '';
        
    })
    .catch(() => {
        result.innerHTML = '';
        notifyAlert();
    });
}