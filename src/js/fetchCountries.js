import { Notify } from 'notiflix/build/notiflix-notify-aio';
const BASE_URL = 'https://restcountries.com/v3.1';
import { renderCountryCard } from '../index';

function fetchCountries(name) { 
  return fetch(`${BASE_URL}/name/${name}?fields=name,capital,population,flags,languages`)
    .then(response => {
      if (!response.ok) {
        Notify.failure('Oops, there is no country with that name');
      }      
      return response.json()
    })
    .then(renderCountryCard)
    .catch(error => {
      console.log(error);
    })
};


export {fetchCountries};



console.log(fetchCountries('peru'));