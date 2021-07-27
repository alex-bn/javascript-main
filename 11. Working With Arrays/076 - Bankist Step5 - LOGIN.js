// Step 5 -- Login
// Event handlers 

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';

    inputLoginPin.blur(); // removes the focus from the input field after login 

    // Display balance 
    displayMovements(currentAccount.movements);
    // Display summary
    calcDisplayBalance(currentAccount.movements);
    // Display balance
    calcDisplaySummary(currentAccount);
  }
})