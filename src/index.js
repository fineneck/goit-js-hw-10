import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import cardCounties from './templates/cardsCountries.hbs';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;


console.log(cardCounties);

