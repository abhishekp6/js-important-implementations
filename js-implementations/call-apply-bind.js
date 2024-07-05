/*
    Call() method in javascript

    Basically used for calling a function in object A, with its this pointing to another object B, given as an argument in call method
    
    call()
    First Argument: Reference to this variable
    Following arguments: Passed as it is to function
    exp: call(obj2, "arg1", "arg2")

    apply() is same as call, only diff is the follwoing arguments are passed in an array
    exp: apply(obj2, ["arg1", "arg2"])

    bind() is same as call(), onyl diff is it does not directly call the function rather the output of bind is a function that needs to be invoked.

*/

// Variation 1
console.log("\n Variation 1 \n")

let name = {
    firstName : "M. S.",
    lastName : "Dhoni",
    printFullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
}

name.printFullName();

let name2 = {
    firstName : "Virat",
    lastName : "Kohli"
}

// Function Borrowing
name.printFullName.call(name2);

// Variation 2
console.log("\n Variation 2 \n")

let name3 = {
    firstName : "M. S.",
    lastName : "Dhoni",
}

const printFullName = function(state, hometown) {
    console.log(this.firstName + " " + this.lastName + " lives in " + state + " " + hometown );
}

printFullName.call(name3, "Jharkhand", "Jhansi");

let name4 = {
    firstName : "Virat",
    lastName : "Kohli"
}

// Function Borrowing
console.log("--------------------------------------------")
printFullName.call(name4, "Delhi", "West Delhi");
printFullName.apply(name4, ["Delhi", "West Delhi"]);
const bindOutput = printFullName.bind(name4, "Delhi", "West Delhi");
bindOutput();
