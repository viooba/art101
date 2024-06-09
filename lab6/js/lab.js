// index.js - lab 6
// Author: Viona Lei
// Date:6/8/24

// Constants
let myTransport = ["car", "bike", "bus", "train", "walking"];
// Functions

var MyMainRide = {
  make:"Toyota",
  model: "Corolla",
  color: "silver",
  year: 2019,
  age: function() {
      return 2019 - 2024;
  }
}
  
//output 
document.writeln("Kinds of transportation I use: ", myTransport, "<b/r>");

document.writeln("My Main Ride: <pre>", 
    JSON.stringify(MyMainRide, null, '/t'), "</pre>");






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
