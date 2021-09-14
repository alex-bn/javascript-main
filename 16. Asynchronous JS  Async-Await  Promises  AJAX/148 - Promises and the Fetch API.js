////////////////////////////////////////////
// How it used to work:
// const request = new XMLHttpRequest();
// request.open(`https:/restcountries.eu/rest/v2/name${country}`);
// request.send();

// How we can do it now:
const request = fetch('https:/restcountries.eu/rest/v2/name/portugal');
console.log(request);

// Fetch API returns promise / Fetch API builds a promise
