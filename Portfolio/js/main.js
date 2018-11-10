/*eslint no-console: "off"*/
/*eslint quote-props: "off"*/
// ***** Img sliding ***** //

// UX - Preventing too many request being made
// function debounce(func, wait = 20, immediate = true) {
//   var timeout;
//   return function() {
//     var context = this, args = arguments;
//     var later = function() {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// }

// const imgs = document.querySelectorAll('.pic');

// window.addEventListener("scroll", debounce(checkSlide));

// function checkSlide() {
//   // forEach img in imgs
//   imgs.forEach(function(img) {
  
//   // find the middle of img
//   const slideIn = (window.scrollY + window.innerHeight) - img.height / 2 // start of transition
//   // console.log(`Y: ${window.scrollY}`)
//   // console.log(`InnerHeight: ${window.innerHeight}`)
//   const imgBottom = img.offsetTop + img.height; // bottom of the image is the end of the transition
//   // console.log(`imgBottom: ${imgBottom}`);
//   // console.log(`img.offsetTop: ${img.offsetTop}`);
//   const isHalfShown = slideIn > img.offsetTop; // between middle of image and bottom - to add "active" class
//   // console.log(`isHalfShown: ${isHalfShown}`);
//   const isNotPast = imgBottom > window.scrollY; // above bottom of image - to add "active" class
//   // console.log(`isNotPast: ${isNotPast}`);

//   if (isHalfShown && isNotPast) { // add 'active' class when slidIn
//         img.classList.add("active");
//       } else { // finish 'active' class when imgBottom
//         img.classList.remove("active"); 
//       }
//   });
// }


// ***** Gallery ***** //

const getPanels = document.querySelectorAll('.panel');
    // link = document.querySelector('.link');
    // str = '<a href="http://samisaacs.website">Portfolio</a>';
    
    // function to toggle .open class - this.addclass(.panels)
    function toggleOpen() {
      this.classList.toggle('open');
      // console.log(link);
      // link.outerHTML=str;
    }
    
    // add onclick listener to run toggle function
    getPanels.forEach(panel => {
      panel.addEventListener("click", toggleOpen);
    });
    getPanels.forEach(panel => {
      panel.addEventListener("transitionend", toggleActive);
    });

    // write a function to toggle an active class
    function toggleActive(e) {
      //if transistion includes 'flex'
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }


// ***** STICKY NAV ***** //
const nav = document.querySelector('nav');
const topOfNav = nav.offsetTop; // was let -eslint error

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = `${nav.offsetHeight}px`;
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', fixNav);


// ***** NAV HIGHLIGHT FOLLOW ***** //
const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');


function highlightLink() {
  highlight.classList.add('highlight');
  document.body.append(highlight);
  const linkCoords = this.getBoundingClientRect();
  const coords = {
    height: linkCoords.height,
    left: linkCoords.left + window.scrollX,
    top: linkCoords.top + window.scrollY,
    width: linkCoords.width
  }
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
  // console.log(linkCoords);
}

function removeHighlight() {
  highlight.classList.remove('highlight');
  // console.log("Remove highlight here");
}

triggers.forEach(a => a.addEventListener("mouseenter", highlightLink));
document.addEventListener("scroll", removeHighlight);