import getRefs from './getRefs';

const refs = getRefs();

function clearAllFields() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
};

function clearcountryList() {
  refs.countryList.innerHTML = '';
};

function clearcountryInfo() {
  refs.countryInfo.innerHTML = '';
};


export { clearAllFields, clearcountryList, clearcountryInfo };