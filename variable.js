// VARIABLE  -> Is like container where we can store something..

// example : Bottle -> container
//           water  -> Data/value 

// There are 3 keywords in variables..

// 1) var   -> old way to declare a variable in js..
//          -> Function scoped..
//          -> It stores any values, and we can change the value later..

var city = "Chennai";
console.log(city);

var city = "Thanjavur";    // Change in value..
console.log(city);

// 2) let    -> Modern and safe way to declare a variable..
//           -> It can change the values later..
//           -> Block Scoped..

let name = "Surya";
console.log(name);

name = "Vignesh";    // change in value..
console.log(name);


// 3) const    -> It is used to declare a constant variable that cannot be changed..
//

const pi = 3.14;
console.log(pi);

// pi = 3.145;     // In constant variable values cannot be changed..
// console.log(pi);


{
    let name  = "Menchu";
    console.log(name);  
    
}

// those curly brackets are known as block scope..
// it contains block of code...
// It lives inside the block. outside it won't exist..





