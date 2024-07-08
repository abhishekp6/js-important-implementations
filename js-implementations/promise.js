/*
Example code snippets
*/

// Create a promise that resolves in 5 seconds.
const resolveInTen = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise resolved in 5 seconds")
        resolve("resolved")
    }, 5000);
})

resolveInTen.then((val) => {
    console.log(val, "From then");
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("Finally Method");
})