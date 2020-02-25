// Setting our initial count
var count = 0;
// Grabbing the element on the HTML page
var incrementEl = document.querySelector("#increment");

function setCounterText() {
  // We need to write the count to the front end here!
}

// Adding a click listener to incerement count, and update the UI
incrementEl.addEventListener("click", function () {
  count++;
  setCounterText();
});


