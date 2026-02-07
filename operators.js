// OPERATORS     -> Operators are special symbols or words that tell
//                  JS to do something with the values of variables..

// Types of Operators

// 1) Arthimatic Opeartors   (+ , - , * , / , %)
//                  -> it is used for the basic math..

let a = 2;
let b = 5;
let c = 7;

console.log(a + b);
console.log(a - b);
console.log(a * c);
console.log(a / b);
console.log(a % c);


// 2) Assignment Operators   (= , += , -= , *= , /= , %=)
//                  -> it assign a value of a variable..
//   x = x + y -> Normal declaration
//  x += y shorthand method (we prefer this method)

let x = 2;
let y = 5;

console.log(x = x + y);
// x = x + y  -> x = 2 + 5
// x = 7

console.log(x += y);
//  x += y  -> x = x + y
//  7 += 5  -> x = 7 + 5
//  x = 12

console.log(x -= y);
console.log(x *= y);
console.log(x /= y);
console.log(x %= y);

// 3) Comparison Operators    (== , ===)
//           -> It used to check and compare
//           -> They retrun a boolean value - either true or false..

let d = "10";
let e = 10;
let f = 5;
let g = 15;

console.log(d == e); // Double equal (==)  checks only the values..
console.log(d === e); // Triple equal (===) checks both values and datatypes
console.log(d == f);
console.log(d > f); // > greater than
console.log(e < f); // < Less than
console.log(d >= f); // >= Greater than or equal
console.log(g <= d); // <= Less than or equal

// 4) Logical Operators   (AND OR NOT) (&& || !)
//            They are used to combine multiple condition..
//            They retrun either true or false depending on the logic..

let h = 10;
let i = 5;
let j = 15;

// Logical AND(&&) - Both conditions must be true..
console.log((h > i) && (j > i));
// true && true   -> true(output)

console.log((h > i) && (j < i));
// true && false -> false(output)

// Logical OR (||)   -> Atleast one condition must be true..
console.log((h > i) || (j < i));
// true || false   -> true(output)

console.log((h > i) && (j > i));
// true || true   -> true(output)

// Logical NOT (!)   -> Reverse the Result

console.log(!(h > i));
// !(true)   -> false

console.log((!h < i));
// !(false) -> true(output)


// 5) String Operators   -> Opeartors which used to join string together..
//                          mostly we + symbol

let greeting = "Good " + "Afternoon";
console.log(greeting);

let firstName = "Vignesh ";
let lastName = "Elangovan";
let finalName = firstName + lastName;

console.log(finalName);


let age = 18;

let vote = (age > 18) ? "Yes, i can vote" : "No, i will vote by next year";
console.log(vote);





















