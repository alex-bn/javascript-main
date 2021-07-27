//Step 2 Computing username initials using map and the for each method



// Start wil one string and then we can generalize 
const user = 'Steven Thomas Williams'; //stw

/*

const username = user.toLowerCase().split(' ').map(function (name) {
  return name[0];
}).join('');

*/


/*
simplify the callback function

const username = user.toLowerCase().split(' ').map(name => name[0]).join('');
console.log(username);

*/


/*
building the function

const createUsernames = function (user) {
  const username = user.toLowerCase().split(' ').map(name => name[0]).join('');
  return username;
}

console.log(createUsernames('Steven Thomas Williams'));

*/


// Applying the function for each owner of the accounts array
// We do not need to create a new array, all we need is to modify the object and add a new property, so what we want is to loop through the array and extract the initials forEach owner

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  });

}
createUsernames(accounts);
console.log(accounts);