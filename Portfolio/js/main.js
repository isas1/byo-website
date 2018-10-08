// Preventing to many request being made
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const imgs = document.querySelectorAll('img');

window.addEventListener("scroll", debounce(checkSlide));

function checkSlide() {


  // forEach img in imgs
  // find the middle of img
  // find the end of the img
  // addClass active between middle and end
  // removeClass active when reaching the end of the img
  console.log("imgs");
}
