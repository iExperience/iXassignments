$(document).ready(function() {
  var url = "https://api.nytimes.com/svc/mostpopular/v2/mostemailed//.json";
  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    displayResults(results);
  }).fail(function(err) {
    throw err;
  });

  var results = [
    {title: "Intro coding class breaks new learning records", byline: "Rafi Khan", url: "http://google.com"},
    {title: "In bold move, iXperience expands to Antarctica", byline: "Aaron Fuchs", url: "http://google.com"},
    {title: "When in doubt, just Google it and leave me alone", byline: "Allie Ivener", url: "http://google.com"},
  ]
  displayResults(results);
});

function displayResults(results) {
  for (var i = 0; i<results.length; i++) {
    var res = results[i];
    var div = $("<div></div>"); // Containing div
    div.addClass("article");
    var p = $("<p></p>"); // Title with link
    var a = $("<a></a>");
    a.html(res["title"]);
    a.attr("href", res["url"]);
    a.attr("target", "_blank");
    var span = $("<span></span>"); // Byline
    span.html(res["byline"]);
    span.addClass("byline");
    // Tie it all together
    p.append(a);
    div.append(p).append(span);
    $("#list").append(div);
  }
}