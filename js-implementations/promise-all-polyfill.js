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