// Step 8

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add the transfer
    currentAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';

});