/*
    Basically using a base function to create its variants with pre setting few parametres and keeping other params dynamic 
*/

// Function currying using bind method

let multiply = function (x, y){
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(4);

// Function currying using closures

function sumParent(a){
    return function(b){
        console.log(a+b);
    }
}

let addTwo = sumParent(2);
addTwo(2);
addTwo(4);
