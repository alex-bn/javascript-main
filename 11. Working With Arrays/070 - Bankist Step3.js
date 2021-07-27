// Step 3 calculate and print the balance or an account

const labelBalance = document.querySelector('.balance__value');

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`
}

calcDisplayBalance(account1.movements)