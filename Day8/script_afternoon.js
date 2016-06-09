console.log("1");
$(document).ready(function () {
  function (funtimes) {
    // console.log(funtimes);
    console.log("4");
  }
  // jQuery("div") // Returns an array of jQuery objects
  // jQuery("div").keyup(someFunc)
  $("#clickableDiv").click(someFunc);
  console.log(someFunc);
  
  console.log("2");
  // console.log(someFunc);
});
console.log("3");

function callTwice(f) {
  f();
  f();
  return 1;
}

// callTwice(someFunc)



// callTwice(someFunc)

// callTwice(someFunc)

// All functions do is take inputs
// Do stuff in the middle
// And returned outputs
function add(num1, num2) {
  // console.log(7);
  // Order an Uber
  return num1 + num2;
}

var add2 = add(1, 2);