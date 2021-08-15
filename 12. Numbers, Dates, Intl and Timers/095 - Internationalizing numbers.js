'use strict';

const accounts = [account1, account2];
const num = 3884764.23;

const options = {
  style: 'currency', // percent, unit
  unit: 'mile-per-hour', // celsius
  currency: 'EUR',
  // useGrouping: false,
};

console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-De', options).format(num));
console.log('Syria:   ', new Intl.NumberFormat('ar-Sy', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);

// ! nice and simple reusable function:
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};
