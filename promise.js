// PROMISE   -> It is way to handle asynchronous operations in javascript..

// Promise States   -> i) Pending    -> The Task is still running..
//                     ii) Fulfilled -> The Task finished sucessfully, where we get a value..
//                     iii) Rejected -> The Task failed, we get an error..

// Promise Functionality :
//                   -> Fetching data from a website
//                   -> Waiting for file to download
//                   -> Any slow task that finishes later..
//                   -> Instead of blocking the code, JS says,
//                   -> I will promise to give you the result later..

// Keywords used in promise method..

// i) resolved     -> It gives success message..
// ii) rejected    -> It gives failure message..
// iii) then()     -> What to do if it works..
// iv) catch()     -> What to do if failed..
// v) finally()    -> It runs always..

let abc = new Promise(function(resolve, reject) {

    let success = false;   // we set a variable success to true..

    if(success) {
        resolve("Task Completed");
    } else {
        reject("Task Failed")
    }
});

abc
.then(function(result) {
    console.log(result);
})
.catch(function(error) {
    console.log(error);
});


// Another Program..

let myPromise = new Promise((a,b) => {
    let value = 5;

    if(value > 0) {
        a("Success..This is Positive")
    } else {
        b("Failed..This is Negative")
    }
});
myPromise.then(c => console.log((c))) // runs if resolved..
.catch(d => console.log(d)) // runs if rejected..
.finally(() => console.log("I always execute")); // it runs always..


