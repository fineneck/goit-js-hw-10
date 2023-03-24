function fetchCountries(name) { 
  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
    .then(response => {
      return response.json();
    })
    .then(country => {
      console.log(country);
    }) 
    .catch(error => {
      console.log(error);
  })
};


// function fetchCountries(name) {
//   return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
//     .then(response => {
//     if (response.status !== 200) {
//       throw new Error(response.status);
//     } 
//     return response.json();
//   });
// }

export {fetchCountries};

console.log(fetchCountries(''));