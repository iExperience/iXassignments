// Hello world 10 times
// for (var i = 0; i < 50; i++) {
//   console.log("hello world " + i);
// }

document.onkeypress = function (e) {
  console.log(e);
  var keyElem = document.getElementById("key");
  keyElem.innerHTML = e.code;

  var codeElem = document.getElementById("code");
  codeElem.innerHTML = e.keyCode;
};