$(document).ready(function() {
  var url = "https://api.nytimes.com/svc/topstories/v2/opinion.json";
  var key = "6c1830c231564612bbf5484ce7933e27";
  $.ajax({
    url: url + "?api-key=" + key,
    method: 'GET',
  }).done(function(response) {
    console.log("done!", response);
    displayResults(response.results);
  }).fail(function(err) {
    throw err;
  });
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