// get the navbar element
const navbar = document.getElementById("navbar");

// get the current scroll position
let currentScroll = window.pageYOffset;

// listen for the scroll event
window.addEventListener("scroll", function() {
  // get the current scroll position
  let newScroll = window.pageYOffset;

  // check if the user has scrolled up
  if (newScroll < currentScroll) {
    // add the "scrolled" class to the navbar
    navbar.classList.add("scrolled");
  } else {
    // remove the "scrolled" class from the navbar
    navbar.classList.remove("scrolled");
  }

  // update the current scroll position
  currentScroll = newScroll;
});