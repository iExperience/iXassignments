function changeColor() {
	$('.color-div').css('color', 'red');
}

function addToDiv() {
	$('.add-div').append(" blue");
}

function addTitle() {
	$('.title-div').append("<h1>Page Title</h1>");
}

function getSelected() {
	var selected = $('#selector option:selected').text();
	alert(selected);
}

function changeText() {
	$('.title-div').html("<h1>New Title</h1>");
}

$(document).ready(function() {
	$('.the-button').click(function(){ 
		changeColor();
	});
	$('.get-selected').click(function(){ 
		getSelected();
	});
	$('.text-changer').click(function(){ 
		changeText();
	});
	addToDiv();
	addTitle();
});

document.onclick = function (e) {
  console.log(e);
  var keyElem = document.getElementById("key");
  keyElem.innerHTML = e.code;

  var codeElem = document.getElementById("code");
  codeElem.innerHTML = e.keyCode;
};