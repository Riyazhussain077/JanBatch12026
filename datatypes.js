// DATATYPES   -> to define a data (or) value types tell what kind of data 
//                a variable is storing..

// Datatypes divide into 2 types
// 1) Primitve Datatype      -> It stores single value in single variable
// 2) Non-Primitive Datatype -> It stores multiple values in a single variable..

// 1) Primitive Datatype are further divide into several types

// i)  STRING      ->  stores values inside the quotes (' ', " ")


let name = "Vignesh";
let Name = 'Surya'

let firstName = "Vignesh";
let lastName = "Elangovan";

console.log(name);
console.log(Name);
console.log(firstName + lastName);


// ii) NUMBER       -> Used for basic math, counting and calculation

let age = 21;
let price = 99.99;
let temperature = -24;

console.log(age);
console.log(price);
console.log(temperature);

// iii) BOOLEAN     -> True (or) False (Conditional Statement)
//                  -> only have 2 values

let abc = 5 > 7;
console.log(abc);

abc = 5 < 7;
console.log(abc);

// iv) UNDEFINED     -> Not given yet
//                   -> we declare but don't give it a value..

let a;
console.log(a);

// v) NULL           -> empty on purpose
//                   -> Null means nothing, but on purpose..

let bca = null;
console.log(bca);


// 2) NOn-Primitve Datatypes are further divide into few types

// i)  OBJECT    -> Collection of data
//               -> An Object stores multiple values together..(Key value Pairs)

let Person = {
    name : "Menchu Tagore",
    age : 25,
    place : "Chennai"
}
console.log(Person);


// ii)  ARRAY         -> List of items
//                    -> An Array is a list of collection of values inside []...

let fruits = ["Mango" , "Apple", "Banana"];
console.log(fruits);
 




