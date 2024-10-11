/*
    Returns a promise
    Return when first promise is resolved with its value
    Returns when all promises are rejected with reasons of all 
*/

function PromiseAny(promiseArr) {
    const rejectionReason = [];
    const rejectedCount = 0;
    return new Promise((resolve, reject) => {
        promiseArr.forEach((element, index) => {
            Promise.resolve(element).then(() => {
                resolve();
            }).catch((err) => {
                rejectionReason[index] = err;
                rejectedCount++;
                if(rejectedCount == promiseArr.length){
                    reject(rejectionReason);
                }
            })
        });
    })
}