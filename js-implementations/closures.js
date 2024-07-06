/*
Closures: A function bindled with its lexical enviornment i.e variables of its parent scope.
*/
function a(){
    var a = 7;
    return function b(){
        console.log(a);
    }
}

a();

let z = a();

// Here Z = function b + { varibales 'reference'(those are consumed in function b) if var, variable value if let or const} of all above level parent scopes i.e, hence output will still be same as a().

/* 
Exp: 
z = var a reference + function b(){
        console.log(a);
    }
*/

// Also since the { variables reference for var and variable value for let/const} is attached to returned function in form of closure, those variable are reachable from the inner most function,
// and those variables are not garbage collected.
z();


// Set Time out example of closure

function printNums(){
    for(var i=0; i<=5; i++){
        // Creating a closure of function close with unique values of x;
        function close(x){
            setTimeout(function(){
                console.log(x);   
            }, x*1000);
        }
        close(i);
    }
}

printNums();