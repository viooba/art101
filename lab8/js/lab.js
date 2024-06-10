// index.js - purpose and description here
// Author: Viona Lei
// Date: 6/8/24

// Constants
 
// Functions
function isOdd(x) {
  return (x % 2 != 0);
}

console.log("Is 3 odd?", isOdd(3));
console.log("Is 4 odd?", isOdd(4));


array = [101, 81, 5, 17, 43, 144, 10000]
console.log("My Array", array);
var result = array.map(isOdd);
console.log("Test of Oddness of array:", result);

var result = array.map(function(x){
  return x ** 0.5;
})

console.log("Squareroot of array:", result);

// // this is an example function and this comment tells what it doees and what parameters are passed to it.
// function myFunction(param1, param2) {
//   // some code here
//   // return results;
// }

// function main() {
//   console.log("Main function started.");
//   // the code that makes everything happen
// }

// // let's get this party started
// main();
