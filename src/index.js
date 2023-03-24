import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './js/fetchCountries';
import getRefs from './js/getRefs';
import * as clearField from './js/clearField';

const DEBOUNCE_DELAY = 300;

const refs = getRefs();

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  e.preventDefault();

  inputValue = e.target.value.trim();

  if (inputValue !== '') {
    fetchCountries(inputValue);
  } else {
    clearField.clearAllFields();
  }
}

export function renderCountryCard(countries) {
  if (countries.length >= 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  };
  clearField.clearAllFields();

  if (countries.length === 1) {
    const countryMarkup = countries.flatMap(({ flags, languages, population, capital, name }) => {
      return `
      <h1>
        <img
          src='${flags.svg}'
          alt='${flags.svg}'
          width='40'
          heigth='25'
        />
        ${name.official}
      </h1>
      <ul>
        <li>
        <p>Capital:</p>${capital}
        </li>
        <li>
        <p>Population:</p>${population}
        </li>
        <li>
        <p>Languages:</p>${languages}
        </li>
      </ul>`;
    }).join('');
    refs.countryInfo.innerHTML = countryMarkup;
    clearField.clearcountryInfo();
  }
}



