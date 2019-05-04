/* joinArray.js
 * Follow the prompts to print out 
 * an interesting quote.
*/

let phrases = ["enough", "zebras are great!", "are", "think they can", "crazy", "umbrellas"];

/* Sort the phrases array 
 * in alphabetical order
*/
phrases.sort();


/* Remove the last element in the
 * phrases array
*/
phrases.pop();


/* Add the string "the ones who do."
 * to the end of the phrases array
*/

phrases.splice(5,0,"the ones who do.");

/* Add the string "People who" at 
 * index 0 of the phrases array
*/
phrases.splice(0,0,"People who");


/* Add the string "to" at 
 * index 4 of the phrases array
*/
phrases.splice(4,0,"to");


/* Replace the string "umbrellas"
 * with the string at index 1 of the
 * phrases array.
 * Hint: Print your array to figure out
 * the current index of "umbrella".
*/
phrases.splice(6,1,);
.splice(6,0,"are");




/* Add the phrase "change the world," 
 * at the second to last index of the array.
*/
phrases.splice(6,0,"change the world,");


/* This code should print: 
 * People who are crazy enough to 
 * think they can change the world, 
 * are the ones who do. 
*/
let quote = phrases.join(" ");
console.log(quote);
