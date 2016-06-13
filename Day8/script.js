$(document).ready(function() {
  $("#todo-input").keyup(function(e) {
    if (e.keyCode == 13) {
      addToList($("#todo-input").val());
      $("#todo-input").val("");
    }
  });

  $("#list").click(function(e) {
    console.log($(e.target));
    if ($(e.target).hasClass("list-item")) {
      $($(e.target)).remove();
    }
  })
});

function addToList(value) {
  var li = $("<li></li>").html(value);
  li.addClass("list-item");
  $("#list").append(li);
}