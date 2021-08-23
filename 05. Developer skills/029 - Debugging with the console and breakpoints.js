'use strict';

//Example 1:

const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',

        // C) FIX
        //value: Number(prompt('Degrees celsius: '))
        value: 10
    }

    // B) FIND 
    console.log(measurement);
    console.log(measurement.value);
    // a different way to see objects:
    console.table(measurement);
    console.log(typeof measurement.value);
    // And now we can see the BUG: the prompt function return a string and when we try to add it to a number it simply concatenates the two
    // console.warn(measurement.value);
    // console.error(measurement.value);
    const kelvin = measurement.value + 273;
    return kelvin;
};

// A) IDENTIFY: 
console.log(measureKelvin());

//Example 2: 

//using a debugger:

const calcTempAmplitudeBug = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = 0; // find the bug using the debugger
    let min = 0; // find the bug using the debugger
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;
        if (curTemp > max) {
            max = curTemp;
        }
        if (curTemp < min) {
            min = curTemp;
        }
    };
    console.log(max, min);
    return max - min;
};


const amplitudeBug = calcTempAmplitudeBug([3, 3, 9, 5], [8, 4, 5]);

console.log(amplitudeBug);