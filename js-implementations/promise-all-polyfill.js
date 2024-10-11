/*
Promise all definition
- Takes an array of promises
- Return a single promise that is resolved with array values when all promises in array are resolved 
- Returns a single promise with reason when first of promises is rejected
- The response is in same order of input
*/

function promiseAll(promises){
    // promises is an array conatining multiple promises
    const results = [];
    const promisesCompletedCount = 0;
    return new Promise((resolve, reject) => {
        promises.forEach((element, index) => {
            element.then((val) => {
                results[index] = val;
                promisesCompletedCount++;
                if(promisesCompletedCount == promises.length){
                    resolve(results);
                }
            }).catch((er) => {
                reject(er);
            })
        });
    })
}