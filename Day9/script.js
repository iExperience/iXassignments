// User does an action
  // Load the page (change to when user presses enter in the search bar)
// Javascript makes a request
  // to: The New York API
// My page uses the data
  // Display top news stories on the page

$(document).ready(function() {
  var url = "https://api.nytimes.com/svc/topstories/v2/home.json" +
    "?api-key=6c1830c231564612bbf5484ce7933e27"

  $.ajax({
    url: url, // The URL you are requesting
    method: "GET",
    success: handleResponse,// A function that is run when the request is complete
    error: function(error) {
      alert("error!");
    }
  });
});

function handleResponse(response) {
  console.log(response);
  // $("#list").html(response.results[].title);

  // Show ALL THE TITLES
  for (var i=0; i<response.results.length; i++) {
    // console.log(response.results[i].title);
    $("#list").append(response.results[i].title);
  }
}