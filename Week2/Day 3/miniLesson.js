function reverseString(inputString){
    // This was the first serious method
    // chain call we have seen
    return inputString.split("").reverse().join("");
}

let resverseString = reverseString("Justin");
console.log(reverseString);

// Adapter Pattern
let wordArr = ["Justin","is","making","a","string"]

function arrayToString(a){
    return a.join("")
}

// console.log(reverseString(arrayToString(wordArr)));

// Things to ponder
// console.log(3 > 2 > 1);

// let x = " ";
// if(x) {
//     console.log(x);
// }

function apply(func, data) {
    return func(data);
}

let result = apply(arrayToString, wordArr);
console.log(result);

//This is a simple use of a callback
apply(console.log, "this is data for the callback")

// Call backs are awesome cause I can make functions
// for them in-line
console.log(apply(x => x*10, 5))
// ^--- this is a fat arrow function identity
// Recursion 
function printOne(arr){
if (arr.length > 0){
    console.log(arr[0]);
    printOne(arr.slice(1));
}
}

console.log(apply((x) => x*x, 3));

///let StringDotSplitReturn = "This is a test".split("");
//console.log(StringDotSplitReturn);
//let arrayDotReverseReturn = stringDotSplitReturn.reverse();
//console.log(arrayDotReverseReturn);
//let arrayDotJoinReturn = arrayDotReverseReturn.join("");
//console.log(arrayDotJoinReturn);


