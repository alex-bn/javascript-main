'use strict';


// // PROBLEM: 
// // We work for a company building a smart home thermometer. Our most recent task is this:
// //"Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might by a sensor error"

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// // 1) Understanding the problem 
// // - What is the temperature amplitude? Answer: difference between highest and lowest temp.
// // - How to compute max and min temperatures?
// // - Whats a sensor error ? And what to do ?

// // 2) Breaking up into sub-problems 
// // - How to ignore errors ?
// // - Find max value in temp array 
// // - Find min value in temp array 
// // - Subtract min from max (calc amplitude) and return it

// const calcTempAmplitude = function (temps) {
//     let max = temps[0];
//     let min = temps[0];
//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== 'number') continue;
//         if (curTemp > max) {
//             max = curTemp;
//         }
//         if (curTemp < min) {
//             min = curTemp;
//         }
//     };
//     console.log(max, min);
//     return max - min;
// };


// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);


// // PROBLEM 2: 
// //Function should now receive 2 arrays of temperature
// // 1) Understanding the problem:
// // - When we have 2 arrays, should we implement the same functionality twice ?
// // Answer: No. Just merge the two arrays. 

// // 2) Breaking up into sub-problems
// // - Merge 2 arrays


// const calcTempAmplitudeNew = function (t1, t2) {
//     const temps = t1.concat(t2);
//     console.log(temps);

//     let max = temps[0];
//     let min = temps[0];
//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== 'number') continue;
//         if (curTemp > max) {
//             max = curTemp;
//         }
//         if (curTemp < min) {
//             min = curTemp;
//         }
//     };
//     console.log(max, min);
//     return max - min;
// };


// const amplitudeNew = calcTempAmplitudeNew([3, 3, 9, 0], [8, 7, 5]);
// console.log(amplitudeNew);
////////////////////////////////////////////////////////////////

// Exercise: 

// 1) Understanding the problem:
// - Array transformed to string separated by ... 
// - What is X days? Answer: index + 1

// Breaking up into su-problems:
// - Transform array into string
// - Transform each element to string with celsius degrees 
// - Strings needs to contain day (index + 1) 
// - Add ... between elements and start and end of string 


const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// if the string would've had the same length, this would've been easy: 

// console.log(`...${data1[0]}...${data1[1]}...${data1[2]}`);
const printForecast = function (arr) {
    // need an accumulator variable 
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}°C in ${i + 1} days ... `;
    }

    console.log(`... ` + str);
}

printForecast(data1)

