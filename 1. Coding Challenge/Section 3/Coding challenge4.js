bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];

const calcTp = bill => {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTp(bills[i]));
    totals.push(bills[i] + tips[i]);
}
console.log('--- TPS ---');
console.log(tips);
console.log('--- TOTALS ---');
console.log(totals);

// BONUS: 

function calcAvg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        // return sum / arr.length; // GRESEALA A FOST CA EU ASTEPTAM DE LA LOOP SA INTOARCA REZULTATUL FUNCTIEI!!!! TREBUIE MUTAT DUPA CURLY BRACKET MAI JOS...
    }
    return sum / arr.length; // AICI VREM SA PUNEM RETURN RESULT
}

console.log(calcAvg(totals)); // AM GRESIT .. UN PIC ..

//jonas solution:

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
}
bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        // sum = sum + arr[1];
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage([2, 3, 7])); // always test your function
console.log(calcAverage(totals));
console.log(calcAverage(tips));
console.log(calcAverage(bills));
