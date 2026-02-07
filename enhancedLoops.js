// 1) forEach()    -> It is method used with the arrays..
//                 -> It runs a function for each element in the array..

let colors = ["Red", "Blue" , "Green"];
// An array named colors is declared

colors.forEach(function(color, index) {
    // color is the current element..
    // index is the current position..
    console.log("Color at index", index , " is ", color);
});

// 2) forOf()    -> It is used to loop through values (elements)
//                  of iterable objects like arrays, strings, etc..

let fruits = ["Apple" , "Orange" , "Banana"];

for(const fruit of fruits) {
    // it goes through each item (fruit) in the array..

    console.log(fruit);   // Prints the value directly!! 
};

// 3) forIn()    -> It is used to loop through keys (indexes or properties) of an array or objects..

let names = ["Surya" , "Vignesh" , "Menchu"];
// An array named names..

for(let a in names) {
    // loops through the indexes : 0, 1, 2, 3....

    console.log("Index: " , a , "Name : ", names[a]); // Prints the both index and value..
};

// Another Program

const person = {
    name : "Surya",
    age : 25,
    city : "Chennai"
};

for(let a in person) {
    console.log(a + " : " + person[a]);
};

// Another Program

const arr = [10,20,30,40];
let sum = 0;

arr.forEach(num => {
    sum += num;   // sum = sum + num
});
console.log("Sum = ", sum);

// Another Program

const names1 = ["SURYA" , "MENCHU" , "VIGNESH"];

names1.forEach((name, index) => {
    names1[index] = name.toLowerCase();
});
console.log(names1);


const names2 = ["arun" ,"ajay" , "shaik"];

names2.forEach((name , index) => {
    names2[index] = name.toUpperCase();
});
console.log(names2);

let a = "1" +2+3;
console.log(a);


