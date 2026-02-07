// // // Loops   -> A loop is a like a robot that repeats a task again and again
// // //            untill a condition say stop!!.

// // //         -> to repeat code without writing it multiple times..
// // //         -> to go through lists, number, or any data, etc..
// // //         -> to make code shorter and readable..

// // //  Syntax   ->     for(initialization; condition; iteration) {}

// // // Types of Loops

// // // 1) For loop      -> When you know how many times to loop
// // //                  -> It checks the condition first..

// for (let a = 1; a > 5; a++) {

//     console.log("Hello All", a);

// };

// // // 2) While Loop   -> A while loop repeats a block of code as long as a condition is true..
// // //                 -> It checks the condition first..

// let i = 1;

// while (i <= 7) {
//     console.log("Hi!!", i);
//     i++;

// };

// // // 3) do while    -> A do while loop is similar to a while loop,
// // //                  but it runs a the code block at least once..
// // //                -> Even if the condition is false..
// // //                -> first executes the function, then it checks the condition..

// let d = 1;

// do {
//     console.log("Javascript", d);
//     d++;
// } while (d > 5);


let str = "hello";
let reversed = "";

for(let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // reversed = reversed + str[i]
}
console.log(reversed);

// Another Program..

let sentence = "My Name is Riyaz";
let result = "";
let word = "";


for(let i = 0; i < sentence.length; i++) {

    if(sentence[i] !== " ") {
        word += sentence[i];
    } else {
        for(let j = word.length - 1; j >= 0; j--) {
            result += word[j];
        }
        result += " "; // add space..
        word = " "; //reset all the words in the sentence..
    }
}

// Reserve the last words..
for (let j = word.length - 1; j >=0; j--){
    result += word[j];
};
console.log(result);


