/*
    Used with Objects and Functions

    arr.__proto__ = arr.prototype
    obj.__proto__ = obj.prototype
    func.__proto__ = func.prototype

    arr.prototype = object
    object.prototype = null

    func.prototype = function
    function.prototype = object
    object.protoype = null

*/

Function.prototype.myConsole = function (){
    console.log("Console output from proto");
}

let func = function(){
    console.log("Check protypal inheritence");
}

func.myConsole();