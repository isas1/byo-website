// UX - Preventing too many request being made
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
  imgs.forEach(function(img) {
  
  // find the middle of img
  const slideIn = (window.scrollY + window.innerHeight) - img.height / 2 // start of transition

  const imgBottom = img.offsetTop + img.height; // bottom of the image is the end of the transition
  const isHalfShown = slideIn > img.offsetTop; // between middle of image and bottom - to add "active" class
  const isNotPast = imgBottom > window.scrollY; // above bottom of image - to add "active" class

  if (isHalfShown && isNotPast) { // add 'active' class when slidIn
        img.classList.add("active");
      } else { // finish 'active' class when imgBottom
        img.classList.remove("active"); 
      }
  });
}
