'use strict';

// where data can actually come from? 
// 1 From the program itself: written in the source code (eg status messages)
// 2 From the UI: data input from the user of data written in DOM
// 3 From external sources: from a web API

// Collection of data -> Data structure -> 4 types: 

// Simple list: ARRAYS or SETS
// Key/Value pairs: OBJECTS or MAPS

// data fetch from APIs comes in a JSON format (JavaScript Object Notation)

///// DATA STRUCTURES /////

/// 1 /// ARRAYS -> simple lists of values used when we do not need to describe the values
// user ARRAYS whenever you need to store values in order and when they might contain duplicates
tasks = ['code', 'sleep', 'eat', 'code']; // ['eat', 'code', 'sleep', 'eat']
//vs
/// 2 /// SETS -> simple lists of values used when we do not need to describe the values
// should only be used when working with unique values
// use when high-performance is really important
// use to remove duplicate values
//used to complement ARRAYS data structures
tasks1 = new Set(['code', 'sleep', 'code']); // ['code', 'sleep']

////////////////////////////

/// 3 /// OBJECTS - > key/value data structures used when we need to describe the values(using keys)
// OBJECTS have been the traditional method of storing key/value pair(MAPS were introduced in ES6)
// Easier to write and access values with . and []


// Use when you need to include function(methods)
//Use when working wih JSON (can conver to map)
task = {
    task: 'Code',
    date: 'today',
    repeat: true
};

//vs


/// 4 /// MAPS - > key/value data structures used when we need to describe the values(using keys)
// Offer better performance
// Keys can have any data type
// Easy to iterate
// Easy to compute size


// Use when you simply need to map key to values
// Use when you need keys that are not strings
task1 = new Map([
    ['task', 'Code'],
    ['date', 'today'],
    [false, 'Start coding!']
]);