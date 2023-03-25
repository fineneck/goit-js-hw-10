import getRefs from './getRefs';

const refs = getRefs();

function clearAllFields() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
};

function clearCountryList() {
  refs.countryList.innerHTML = '';
};

function clearCountryInfo() {
  refs.countryInfo.innerHTML = '';
};

export { clearAllFields, clearCountryList, clearCountryInfo };