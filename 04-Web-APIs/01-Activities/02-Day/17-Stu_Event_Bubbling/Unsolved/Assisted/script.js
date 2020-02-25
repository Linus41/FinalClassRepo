// Our selectors
var carousel = document.querySelector(".carouselbox");
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");

//The current image (default, blank)
var currentImage;

// Well, the easiest solution here is to create a navigation function to go between images!
function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  // So, we are now wrapping around images - wait, don't we need an array of images now? 

  // Now, set the current image
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// Now add some click listeners to make our buttons work!