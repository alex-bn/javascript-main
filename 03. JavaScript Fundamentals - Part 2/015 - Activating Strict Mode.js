// Strict mode activation

'use strict';

// has to be the very first statement in the script because
// easier to avoid accidental errors 
// 1 strict mode forbids us to do certain things 
// 2 strict mode creates visible errors in the dev console in certain situations 
//examples

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';

// const private = 534;

// const if = 23;