// index.js - Functions
// Author: Viona Lei
// Date:6/8/24

// Constants

// Functions

function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can it.");
  console.log("userName =", userName); 

  var userArray = userName.split('');
  console.log("userArray =", nameArray);

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort= ", nameArraySort);

  var nameSorted = nameArraySorted.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted
}

document.writeln("Oh hey, I've fixed your name: ",
  sortUserName(), "</br>") ; 

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
