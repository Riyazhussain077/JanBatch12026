// 1) MAP      -> It is a method a new array by applying a function
//                to each element of the original array..
//             -> Transform Each Element..

let numbers = [1,2,3,4,5];
// creates an array with 5 numbers..

let squared = numbers.map(function(num) {
    return num * num;
});
// loops through each number and returns its value..
// .map() starts a transformation..
// function(num) is the callback
// num value takes from an array..
//return -> it give you the transformed values

console.log(squared);
// Prints the new array..

// 2) FILTER     -> It is a method creates a new array only with elements
//                  that pass a test (return value)..
//               -> It keeps only what passess the condition..

let ages = [24,54,78,12,5,97];
// An array of different ages in variables..

let adults = ages.filter(function(age) {
    return age >= 25;
});
// Filters only the ages which is 25 and above..

console.log(adults);
// prints the console..

// 3) REDUCE     -> It is a method reduces the array to single value
//                  by applying a function that accumulates a result..
//               -> It boils the array down to one value..

let number = [1,2,3,4];

let total = number.reduce(function(a,b) {
    return a + b;
}, 7);
// Start at ACC = 7,
// ACC = 7 + 1 = 8
// ACC = 8 + 2 = 10
// ACC = 10 + 3 = 13
// ACC = 13 + 4 = 17
console.log(total);
