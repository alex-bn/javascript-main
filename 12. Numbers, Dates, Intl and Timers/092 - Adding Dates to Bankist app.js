'use strict';
// Step 1

// FAKE ALWAYS LOGGED IN - OPTIONAL
currentAccount = account1;
updateUI(account1);
containerApp.style.opacity = 100;
//////////////////////////////////

// day/month/year, hour:minutes -> displayed Under currentBalance

const now = new Date();
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();
const hour = now.getHours();
const min = `${now.getMinutes()}`.padStart(2, 0);

labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

// day/month/year, hour:minutes

// Step 2 - > Update the UpdateMovements function /// REFACTORING /// in order to display the transaction time
