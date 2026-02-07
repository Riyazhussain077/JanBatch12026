// GEC   -> stands for Global Execution Context.

//       -> It is the very first thing JavaScript creates when your code starts running.

//       -> Think of it like the main environment where all your code lives and begins to execut


//       -> GEC Creates space in memory for your variables and functions.

//       -> Starts executing code line-by-line in the global scope. 


function sayHello() {
  console.log("Hello!");
}

sayHello();


//  Call Stack  ->  is like a to-do list for JavaScript.

//              ->  It keeps track of which function is currently running,
//                  and what to return to when it’s done.

//              -> When a function is called, it's pushed onto the call stack.

//              -> When the function finishes, it's popped off the stack.

//              -> JavaScript always runs the function on top of the stack.


function greet() {
  console.log("Hi!");
};

function start() {
  greet();
  console.log("This is Call Stack");
};

start();


//         -> A system that manages the order in which functions are executed.