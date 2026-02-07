// ARRAY   -> An Array is a special variable that can hold more than one value at a time..

// Array Methods -> Array methods are built-in functions in javascript used to perform opeartions on 
//                  arays, like adding, removing, updating, or looping through elements..

// Methods of array further im classifyung into 4 categories..

// 1) Adding & Removing Elements..

// i) push()       -> Adds an element to the end of an array..

let colors = ["Red" , "Blue"];
colors.push("Green");
console.log(colors);

// ii) pop()          -> Removes the last element of an array..

let fruits = ["Apple" , "Banana" , "Mango"];
fruits.pop();
console.log(fruits);

// iii) unshift()      ->    Adds an element to the beginning of an array..

let cars = ["BMW","Audi"];
cars.unshift("lexus");
console.log(cars);

// iv) shift()        -> Removes the first element of the array

let bike = ["Ducati" , "BMW" , "KTM"];
bike.shift();
console.log(bike);


// 2) Finding & Checking Elements..

// i) indexOf()           -> Returns the index (positions) of an item..

//   syntax               -> array.indexOf("searchElement");

let cities = ["Chennai" , "Delhi" , "Mumbai" , "Kolkata" , "Thanjavur"];
console.log(cities.indexOf("Delhi"));

// ii) includes()          -> Checks if a value exists in an array..

//    syntax               -> array.includes("searchElement")

let items = ["Pen", "Mouse" , " Remote" , "Cable" , "Laptop" , "Mobile"];
console.log(items.includes("Mouse"));



// iii) length             -> Gives the number of elements in an array..

let numbers = [1,2,3,4,5,6,7];
console.log(numbers.length);

// 3) Extracting & Modifying Arrays..

// i) slice()         ->  The slice() method is used to extract a part of an array
//                        without changing the original array. It returns a new array..

//  syntax            -> array.slice(start,end);


let animals = ["Cat" , "Dog" , "Lion" , "Tiger" , "Elephant" , "Deer"];

let selected = animals.slice(1,4);
// Extracts from index 1 to 3 (4 is excluded)
// so it gives from index 1 to 3..

console.log(selected);
// prints the new extracted array..

// ii) splice()          -> The splice() method is used to add , remove, or replace elements 
//                          in an array. It modifies the original array..

// syntax                -> array.splice(start, deleteCount, item1, item2, .....)

let fruits1 = ["Apple" , "Banana" , "Cherry" , "Mango"];

fruits1.splice(3, 0, "Orange" , "Grape");
// starts at index 3 
// removes 0 item..
// Adds two elements in an array..

console.log(fruits1);
// Prints the modified array..


// 4) Coverting Arrays..

// i) join()            -> The join() method joins all elements of an array into a single string,
//                         using a separator of your choice..

// syntax               -> array.join(separator);

let words = ["Javascript" , "is" , "fun"];    

let sentence = words.join(" ");
// joins all element into a single string
// The separator is a space " " used here..

console.log(sentence);
// prints the final result..


// Reverse method..

let z = [1,2,3,4,5];
z.reverse();
// it will reverse the order of an given array..

console.log(z);

// Spilt method

let text = "Apple,Banana,Mango";
let fruit1 = text.split(",");
console.log(fruit1);

// Sort 

let names = ["Shaik" , "Yadav" , "Arun"];

names.sort();
// it will arrange the strings into alphabetical order as default..

console.log(names);
// Prints the array..

// Sort in numbers..

let nums = [10,5,100,20,35];

nums.sort(function(a,b) {
    return b - a;
    // a - b = 10 - 5 = 5
    // a - b = 10 - 100 = -90

});

console.log(nums);

// To find largest number and smallest Numbers..

// Smallest Number
let abc = [1,5,8,10];

let max = Math.min(...abc);

console.log(max);

// Largest Number..
let abc1 = [1,5,8,10];

let max1 = Math.max(...abc1);

console.log(max1);




















