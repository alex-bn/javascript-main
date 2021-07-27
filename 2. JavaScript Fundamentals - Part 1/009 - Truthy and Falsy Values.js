// 5 falsy values: 0, '', undefined, null, NaN - > will be converted to false when we attempt to convert them to boolean (they are not exactly false initially but they will become once converted)

// any number that is not 0 or any string that is not the empty string will be converted to true when we attempt to convert them to boolean 


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));
console.log(Boolean(null));


// this type of conversion is usually implicit 

const money = 100;
if (money) {
    console.log(`Don't spend it all!`);
} else {
    console.log(`You should get a job!`)
}

let height; // when undefined it triggers false but when defined as 0 it does the same thing and this should be accounted for because 0 is a perfectly valid number.
console.log(typeof height);
if (height) {
    console.log('Height is defined');
} else {
    console.log('Height variable is not defined!')
}