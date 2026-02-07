// Functions   -> Function is a block of code that performs a specific task..
//             -> It help to reuse write it once and use it as many times as we want..
//             -> It breaks program into small task..
//             -> Easy to test and fix..
//             -> Makes code clean and readable..

function hi() {
    console.log("Good Afternoon");
};
hi();

// Types of Functions

// 1) Function Declaration   -> A Named function defined using the function keyword..

function car() {
    console.log("BMW");
};
car();

// ii) Function Expression   -> A function assigned to a variable..

let greet = function() {
    console.log("Hi all!!");
};
greet();


// iii)  Arrow Function     -> A modern, concise way to write function using => (arrow function)..

let a = 5;
let b = 3;

add = (a,b) => { 
    return a + b;
};
console.log(add(a,b));


const sum = (c,d) => {
    return c * d
};
console.log(sum(2,3));

// iv) Callback Function       -> A fucntion passed as an arugment to an another function..


function user(name) {
    console.log("Hello, " + name);
};


function process(callback) {
    let userName = "Surya";
    callback(userName)
}

process(user);

// v) Constructor Function   -> It is used to create multiple objects with the same structure and behaviour.
//                           -> We use "this" keyword to attach properties to the objects..
//                           -> It used with the "new" keyword to create an object..

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.abc = function() {
        console.log("Hello, My name is " + this.name + " and I am " + this.age + " years old..");
    }
};

let person1 = new Person("Vignesh" , 25);
let person2 = new Person("Surya" , 24);

person1.abc();
person2.abc();





