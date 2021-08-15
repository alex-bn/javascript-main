// replacing

{
  const day = `${date.getDate()}`.padStart(2, 0);
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
// with
{
  return new Intl.DateTimeFormat(locale).format(date);
}

// and

// const now = new Date();
// const day = `${now.getDate()}`.padStart(2, 0);
// const month = `${now.getMonth() + 1}`.padStart(2, 0);
// const year = now.getFullYear();
// const hour = `${now.getHours()}`.padStart(2, 0);
// const min = `${now.getMinutes()}`.padStart(2, 0);
// labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

// Current date with the internationalization API
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', // numeric
  year: 'numeric', // 2-digit
  weekday: 'long', // sort, narrow
};
// const locale = navigator.language; // used when the locale is taken from the users browser
labelDate.textContent = new Intl.DateTimeFormat(
  currentAccount.locale,
  options
).format(now);
