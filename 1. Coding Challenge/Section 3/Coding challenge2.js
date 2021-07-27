// Arrays!

// function calcTip(bill) {
//     if (bill >= 50 && bill <= 300) {
//         return tip = bill * .15;
//     }
//     else {
//         return tip = bill * .2;
//     }
// }

// const bills = [125, 555, 44];
// const tips = [];

// tips.push(calcTip(123));
// tips.push(calcTip(555));
// tips.push(calcTip(44));

// console.log(tips);

// const total = [];

// total.push(calcTip(123) + bills[0]);
// total.push(calcTip(555) + bills[1]);
// total.push(calcTip(44) + bills[2]);

// console.log(total);

// Jonas elegant solution ... 

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
}
// or an arrow function ..
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;

const bills = [125, 555, 44];
tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills);
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total)
