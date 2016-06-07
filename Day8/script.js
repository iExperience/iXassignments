$(document).ready(function() {
  $("#todo-input").keyup(function(e) {
    if (e.keyCode == 13) {
      console.log("enter!")
      addToList($("#todo-input").val());
    }
  });
});

function addToList(value) {
  var div = $("<div></div>").html(value);
  div.addClass("list-item");
  $("#list").append(div);
}