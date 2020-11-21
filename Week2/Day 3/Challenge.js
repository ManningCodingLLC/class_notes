// Write a function th find the Max of three numbers
//let arr = [5,6,7]
//function(arr.math) {
//    console.log(arr);
//}
//arr();

//ANSWER

function getMaxNum(a, b, c){
    let result = a;
    if (b > result){
        result = b;
    }
    if (c > result){
        result = c;
    }
    return result;
}

function getMaxNum(a, b, c){
    let test = [a, b, c]
    let max = a;
    for (num of test){
        if (num > max){
            max = num;
        }
    }

    return max;
}

// Gets you thinking about the future
function getMaxNum(a, b, c){
    return Math.max(a, b, c);
}
console.log(getMaxNum(4, 13, 52));

function getMaxNumFromArray(x){
    if (x && x.length > 0){
        let max = x[0];
        for (num of test){
            if (num > max){
                max = num;
            }
        }
        return max
;    }
    

    return max;
}

// Write a function to sum all numbers in a array

function sumList(arr){
    let total = 0;
    for (num of arr){
        total += num;
    }
    return total;
}

function sumList(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total;
}

// Justin's crazy solution
function sumList(arr){
    return arr.reduce((a, b) => a + b, 0);
}

console.log(sumList([1,2,3,4,5,6]));


// Write a function that reverses a string

function reverseString(a){
    let result = "";
    for (let i = a.length - 1; i >= 0; i--){
        reslut += a[i];
    }
    return result;
}

function reverseString(a){
    let result = [];
    let length = a.length;
    for (let i =0; i < length; i++){
        result.push(a.charAt(length - i - 1));
    }
    return result.join('');
}

// Compact Example

function reverseString(a){
    return a.split("").reverse().join("");
}

console.log(reverseString("This is something to reverse"));


// Write a function that takes a strings and counts the number
// of upper and lower case letters and console.logs them

function stringCaseCounter(stringToCount){
    let uppers = 0;
    let spaces = 0;
    for (letter of stringToCount){
        if (letter == letter.toUpperCase()){
            if (letter != " "){
                uppers++;
            } else {
                spaces++;
            }
        }
    }
    console.log(`uppers: ${uppers}\
                \nspaces: ${spaces}\
                \n lowers: ${stringToCount.length - uppers - spaces}\
                \n${stringToCount}`)
}

stringCaseCounter("This Is a tEst StrinG");


// Write a function that takes a list of numbers and returns a new list
// containing only the unique numbers

function findUniques(a){
    let result = []
    for (num of a){
        let match = false;
        for (unum of result){
            if (num == unum){
                match = true;
            }
        }
        if (!match){
            result.push(num);
        }
    }
    return result;
}

//when you learn more types you can do things like this
function findUniques(a){
    return Array.from(new Set(a));
}

function findUniques(a){
    return[...new Set(a)];
}

console.log(findUniques([1, 2, 3, 4, 5, 6, 7, 3, 6, 1,]));


