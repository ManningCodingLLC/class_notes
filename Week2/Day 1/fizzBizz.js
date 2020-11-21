//* Challenge:
//* Create a variable named FB that takes numbers
//* Write a conditional that: 
//* Prints out "Fizz" if the number is divisible by 3
//* Prints out "Buzz" if the number is divisible by 5
//* Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
//* Write as a If else, Switch, & Ternary

let FB = 30;

if (FB % 3 === 0 && FB % 5 === 0) {
    console.log('Fizz Buzz');
} else if (FB % 3 === 0) {
    console.log('Fizz');
} else if (FB % 5 === 0) {
    console.log('Buzz');
} else {
    console.log('Not divisible by 3 or 5');
}

//TERNARY

let FB = 30;

FB % 3 === 0 | console.log('Fizz');
FB % 5 === 0 | console.log('Buzz');

// N. Snyder Example (SWITCH)

let FB = 30;

switch (FB % 3) {
    case 0:
        switch (FB % 5) {
            case 0:
                console.log('Fizz Buzz');
                break;
            default:
                console.log('Fizz');
                break;
        }
        break;
    default:
        switch (FB % 5) {
            case 0:
                console.log('Buzz');
                break;
            default:
                console.log('Not divisable by 3 or 5')
                break;
        }
        break;
}

//CLASS VERSION

let FB = 30;

if (FB % 15 === 0){
    console.log('Fizz Buzz');
}else if (FB % 3 === 0){
    console.log('Fizz');
}else if (FB % 5 === 0){
    console.log('Buzz');
}else{
    console.log(FB);
}

let FB = 45;

switch (true) {
    case (FB % 15 === 0):
        console.log('Fizz Buzz');
        break;
    case(FB % 3 === 0):
        console.log('Fizz');
        break;
    case (FB % 5 === 0):
        console.log('Buzz');
        break;
}

//TERNARY

let FB = 40;

(Fb % 15 === 0)
 ? console.log('Fizz Buzz')
 : (FB % 3 === 0) ? console.log('Fizz')
 : (FB % 5 === 0) ? console.log('Buzz')
 : console.log(FB)


for (let i = 0; i<=100; i++) {
    if (i % 15 === 0){
        console.log('Fizz iuzz');
    }else if (i % 3 === 0){
        console.log('Fizz');
    }else if (i % 5 === 0){
        console.log('Buzz');
    }else{
        console.log(i);
    }
}