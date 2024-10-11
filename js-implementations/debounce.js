/*
    Returns a anonymous function
*/

function customDebounce(func, delay){
    let timer;
    return function(){
        let context = this;
        let args = arguments;
        clearInterval(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    }
}

let count = 0;

function printOut(){
    console.log(count);
}

const newFunc = customDebounce(printOut, 5000);
newFunc();