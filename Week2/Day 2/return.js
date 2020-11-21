function fullName(fName, lName, isReturned){
    let full =fName + " " + lName;
    console.log(`Hello, my name is ${full}`);
    if (isReturned){
        return full; // return allows you to use the result of the function
    }
    console.log("You didn't return full");    
}


let myFullName = fullName("William", "Manning")

fullName("William", "Manning");