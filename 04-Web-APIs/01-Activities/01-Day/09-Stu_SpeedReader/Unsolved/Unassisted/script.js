var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
// Hint! Here we have an array of words now, since we split it up by spaces. Let's use this to do our speedRead!
var words = poem.split(" ");


// This should be how long the user has to read on the interval in speed read - if you have time, make this configurable
var millisecondsPerWord = 1000; 

/*
 * This function should set up our actual read; Start up our initial countdown, and then call speedRead!
 */
function prepareRead() {

  var timeInterval = setInterval(function() {
    // Write out how long we have left!

    timeLeft--;

    if (timeLeft === 0) {
      // If no time left, we need to write it out!
      speedRead();
      clearInterval(timeInterval);
    }

  }, 1000);
}

/*
 * This function should print words to the screen one at a time.
 */
  // 
function speedRead() {

}

prepareRead();


