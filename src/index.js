import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './js/fetchCountries';
import getRefs from './js/getRefs';
import * as clearField from './js/clearField';

const DEBOUNCE_DELAY = 300;

const refs = getRefs();

refs.input.placeholder = 'Type country name';

window.onload = () => refs.input.focus();

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  e.preventDefault();

  const searchQuery = e.target.value.trim();  

  if (searchQuery === '') {
    clearField.clearAllFields();
    return;
  }

  fetchCountries(searchQuery).then(country => {
    if (country.length >= 11) {
      Notify.info('Too many matches found. Please enter a more specific name.');
      clearField.clearCountryList();
      return;
    }

    if (country.length >= 2) {
      createList(country);
      clearField.clearCountryInfo();
      return;
    }

    if (country.length === 1) {
      createCard(country[0]);
      clearField.clearCountryList();
      return;
    }
  });
}

function createCard(country) {
  const allLanguage = Object.values(country.languages).join(', ');
  const markup = `
    <h2>
      <img src='${country.flags.svg}'
        alt='flag'
        width='30'
        class='country-flag'
      />
      ${country.name.common}
    </h2>
    <p>Capital: ${country.capital}</p>
    <p>Population: ${country.population}</p>
    <p>Languages: ${ allLanguage }</p>
    `;

  refs.countryInfo.innerHTML = markup;
}

function createList(country) {
  const list = country
    .map(
      name =>
        `<li class='list-elem'>
      <p>
        <img src='${name.flags.svg}'
          alt='flag'
          width='30'
          class='country-flag'
        />
       ${name.name.common}
      </p>
    </li>`
    )
    .join('');

  refs.countryList.innerHTML = list;
}
