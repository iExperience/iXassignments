/*
 * My plan:
 * 1. Make the paragraph tag in HTML - done!
 * 2. Identify part of paragraph tag I want to change (give it an ID) - done
 * 3. Detect the key press. When it's pressed: -done
 *   3.1. Get the keycode of the event
 *   3.2. Change the innerHTML of the element with the ID we defined in 2
 */

// The same as window.onload = 
// Should surround all of your Javascript from now on.
$(document).ready(function() {
	console.log("hello");

	// Old syntax
	// You can safely forget this. But know that it exists.
	// document.onkeypress = function(e) {
	// 	console.log("no jquery", e)
	// 	var element = document.getElementById("first");
	// 	element.innerHTML = e.keyCode;
	// }

	// New syntax
	// Use this. 
	$(document).keypress(function(e) {
		console.log("jquery", e.keyCode);
		$("#first").html(e.keyCode);
	});
});