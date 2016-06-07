/*
 * My plan: 
 * 1. Detect key presses in the browser
 * 2. When the key is pressed:
 *   2.1. Find the element with ID 'first'
 *   2.2. Replace the element's text with the code of the key that was pressed
 */

// The window onload function is used to make sure the HTML is loaded
// before the javascript runs. 
// Surround all your code in it. 
window.onload = function() {
  // I want to find the p tag with id "first".
  // The getElementById function defined on document allows me to do that.
  var pElement = document.getElementById("first");
  secondPElement = document.getElementById("second");
  console.log(pElement); // Just checking that it works.

  var someObject = { // Will you be able to access someObject in the console?
    a: "some property"  // What happens if you reassign this value and refresh?
  }

  console.log("1");

  // Detect when a key is pressed on the browser
  document.onkeypress = function (e) { // Callback function
    // This code will run only when a key is pressed
    //   because it is assigned to the onkeypress property of document
    // The browser passes us an object, which we'll call 'e', with all the info
    //   about the key press
    // e is an arbitrary name, but we use it to follow convention (for 'event')
    console.log("press", e); // Make sure you understand what e is!
    pElement.innerHTML = e.code;
    secondPElement.innerHTML = e.keyCode;
  };

  // This is another event that triggers when a key is released. 
  document.onkeyup = function (e) { // Callback function
    console.log("up", e);
  };

  console.log("1");

  // A function that I've defined (and does nothing).
  var takeOutKey = function(string) {
    // Replaces "Key" in string with ""
    return string;
  }
}
