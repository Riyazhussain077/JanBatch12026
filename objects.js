// OBJECTS    -> An Object is a collection of key-value Pairs..
//            -> It's used to store multiple values in one place..

// Index value  -> An index value is the position number of an element in a given data..

//              -> Indexing always starts from 0 to n numbers..

// Finding index values     -> R E N I L D A A R O M  E  N  C  H  U  T  A  G  O  R  E
//                             0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21


let person = {
    name : "Surya",
    age : 24,
    place : "Chennai"
};
console.log(person);

// To Print the specific Properties.. There are 2 types..

console.log(person.name); // Dot Notation -> Objectname.Key

console.log(person["age"]); // Bracket Notation -> ObjectName["Key"]

person.age = 26;  // Updating the value

person.mobileNumber = "1222552412";  // Adding new key value pair..

console.log(person); // It will call all the property which stores in the variable..

console.log(person.age); // It shows the updated value of the property..

// Functions in Object

let car = {
    brand : "Bugatti",
    start : function() {  // start is a method (a function inside the object)
        console.log("car has started");
    }
};
car.start(); // calls the function inside the object

// Using Constructor (this)

let student = {
    name : "Mechu Tagore",
    greet : function() {
        console.log("Hi , I'm " + this.name);   // this.name refers to the current objects name property..
    }
};
student.greet();

// Object with Array

let words = {
    fruits : ["Apple" , "Orange" , "Banana"]
};
console.log(words.fruits[1]);

// Complex Object   -> Object opens inside the objects..

let games = {
    name : "GOW",
    mode : "Playstation",
    configuration : {
        CPU : "i8",
        RAM : 12,
        ROM : 64
    }
};
console.log(games);
console.log(games.configuration);


// delete  -> For Deleting the method or property from the function or objects..

delete games.configuration;
console.log(games);

// delete games.configuration.RAM;
// console.log(games);















