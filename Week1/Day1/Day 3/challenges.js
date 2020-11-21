// CHALLENGE 1
// Who's name is longer?
/* BRONZE
 * Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
 */
/* SILVER
 * Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
*  Example Result: My name is longer than Adam's.
*/
/* GOLD
* In the console log include how many letters difference there are between the names.
* Example Result: Adam's name is shorter than mine by 4 letters.
* There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/

let myName = 'William';
let friend = 'amigo';

console.log (myName.length);
console.log (friend.length);

//silver

if(myName.length>friend.length){
    console.log("My name is longer than Amigo's.");
} 

//GOLD

console.log(friend.length);
if (myName.length > friend.length) {
  let letters = myName.length - friend.length
  console.log(`${friend}'s name is shorter than ${myName}'s name by ${letters} letters`)
} else if (myName.length < friend.length) {
  let letters = friend.length - myName.length
  console.log(`${friend}'s name is longer than ${myName}'s name by ${letters}`)
} else {
  console.log('Our names are the same length!')
}
// CHALLENGE 2
// Types Challenge
/* BRONZE
* Create an Object that contains a string, number, boolean, and object.
* Console.log the type of one of the values in the object.
 */
/* SILVER
* Write a conditional that checks the type of one of the values stored in the object 
* and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
 */

let outkast = {
    
    name            : "outkast",
    members         : 2,
    occupation      : "Entertainers",
    hiatus          : true,
};
console.log(outkast);
console.log(outkast.name);
console.log(outkast.members);
console.log(outkast.hiatus);

var rumor = true;

if( rumor === true) {
    console.log('I want one more album.');
}