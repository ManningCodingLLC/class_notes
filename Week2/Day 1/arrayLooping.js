// BRONZE
//*     - Write a for loop that runs until it's reached the end of 
//        the alphabet array, and prints each letter to the console.
// SILVER
//*     - Write a conditional that is nested inside of the for loop 
//        that checks if the index of each character in the alphabet 
//        array is even or odd. If the index is even, console.log 
//        the letter. If the index is odd, console.log 'the index 
//        is an odd number'.
//GOLD
//*   - Declare a variable of arr that is initialized as an empty array. 
//      If the index of the character in the alphabet array is even, add
//      that character to the variable of arr, and console.log arr. If 
//      the index is odd - using string interpolation - console.log 'the
//      index ___ is an odd number'.
//*    - Use Google to search for an array method that allows you to add 
//      one or more elements to an array

//Bronze Attempt

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (let i = 0; i < alphabet.length; i++){
    console.log(alphabet[i]);
}

//BRONZE ANSWER
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (i = 0; i < alphabet.length; i++) {
    console.log(alphabet[i]);
}

//Silver Attempt
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (i=0; i < alphabet.length; i++) {
    if (alphabet.indexOf(alphabet[i]) % 2===0) {
        console.log(alphabet[i])
    }
}
 
for (i=0; i < alphabet.length; i++) {
    if (i % 2 === 0) {
        console.log(alphabet[i])
    } else {
        console.log('index is an odd number')
    }
}

////Gold attempt

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let alphabetEven = []

for (i = 0; i < alphabet.length; i++) {
    if (alphabet.indexOf(alphabet[i]) % 2 ===0) {
        alphabetEven.push(alphabet[i])
    }
}
console.log(alphabetEven)

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let arr = [];
