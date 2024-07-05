let name = {
    firstName: "Jaspreet",
    lastName: "Bumrah"
}

let printFullName = function (state, town) {
    console.log(this.firstName + " " + this.lastName + " lives in " + state + " " + town);
}   

console.log("bind Output")
let output = printFullName.bind(name, "Karnataka");
output("Bengaluru");

/* Polyfill for bind method */

Function.prototype.myBind = function(...args){
    let funcToCall = this;
    let firstArg = args[0];
    let params = args.slice(1); 
    return function(...args2){
        let params2 = [...params, ...args2]
        funcToCall.apply(firstArg, params2);
    }
}

console.log("mybind Output")
let output2 = printFullName.myBind(name, "Karnataka");
output2("Bengaluru");