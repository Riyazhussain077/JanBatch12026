// ASYNC & AWAIT      -> It is used to handle asynchronous operation
//                       (fetching data, loading files (or) waiting for 
//                       a response in a cleaner , easier way than using traditional callback (or) .then method..)


// ASYNC          -> The async keyword is added before a function to make it return a promise..
//                -> Inside an async function, we can use await..

// AWAIT          -> We can place await in front of a promise o tell javascript..
//                -> It Pauses, untill the promise done..
//                -> It can only be usedd inside an async function..

async function message() {
    return "Learning async and await"
};

// This is an async function that automatically returns a promise with the value..

async function user() {       // Another async function where we will use await..

    let sms = await message();    // The await keyword pauses the execution of the 
    //                               user() function untill message() resolves..
    console.log(sms);
};

user();

// Another console..

async function sum(a,b) {
    return a + b
};

async function add() {
    let value = await sum(2,3);
    console.log(value); 
};
add();

// Another console..

async function hi() {
    return "Good Morning";
};

hi().then(a => console.log(a));