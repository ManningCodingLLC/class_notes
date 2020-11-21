// Function Declarations
/*
syntax:

(1)
function hi(){
    //  (3)
}

1. The js keyword to make a function.
2. Your function name.
3. The function body.

*/

// hi(); // Calling a function : this is how

// Function Declaration
function hi(){
    console.log("Hi!");
}

hi();

let myGreet = hi; // don't do this for now

myGreet();