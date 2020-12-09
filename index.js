


var target = null;
const teamletters = document.querySelector("#tletters");
const mainletters = document.querySelector("#main-letters")
const secondaryletters = document.querySelector("#main-letters-2")
const vid = document.getElementById("v")
if (teamletters != null) {
  teamletters.style.display = "flex";
  vid.style.display = "none";
} else {
  mainletters.style.display = "flex"
  secondaryletters.style.display = "flex"
}



const scroll = new LocomotiveScroll({
  repeat: true

});
var mainPage = false;
if (document.querySelector(".bg-tile-1") == null) {
  mainPage = true
}
// Setup isScrolling variable
var isScrolling;

// Listen for scroll events
window.addEventListener('scroll', function (event) {
  if (!mainPage) {
    if (document.querySelector(".bg-tile-1").getBoundingClientRect().top <= window.outerHeight / 3 && teamletters.style.display == "flex") {
      teamletters.style.display = "none";
    } else if (document.querySelector(".bg-tile-1").getBoundingClientRect().top > window.outerHeight / 3 && teamletters.style.display == "none") {
      teamletters.style.display = "flex";
    }


    if (document.querySelector(".bg-tile-2").getBoundingClientRect().top < 0 && vid.style.display == "none") {
      vid.style.display = "flex"
    }
    else if (document.querySelector(".bg-tile-2").getBoundingClientRect().top > 0 && vid.style.display == "flex") {
      vid.style.display = "none"
    }
    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {

      //collect the tops of each tile section on the page
      var tiletops = [
        document.querySelector(".bg-tile-0").getBoundingClientRect().top,
        document.querySelector(".bg-tile-1").getBoundingClientRect().top,
        document.querySelector(".bg-tile-2").getBoundingClientRect().top,
        document.querySelector(".bg-tile-3").getBoundingClientRect().top,
        document.querySelector(".bg-tile-4").getBoundingClientRect().top]

      // reset our target to null
      target = null;
      // loop through tiled sections
      for (var i = 0; i < tiletops.length; i++) {

        // these if and else if make it know if a tile is within 1/8 of the viewport 
        if (tiletops[i] >= 0 && tiletops[i] < window.outerHeight / 8) {
          item = ".bg-tile-" + i;
          target = document.querySelector(item);
        } else if (tiletops[i] <= 0 && tiletops[i] > window.outerHeight / -8) {
          if (i != 4) {
            item = ".bg-tile-" + i;
            target = document.querySelector(item);
          }

        }
      }
      if (target != null) {
        scroll.scrollTo(target);
      }



    }, 1000);

  } else {
    if (document.querySelector(".main-tile-1").getBoundingClientRect().top <= window.outerHeight / 6 && mainletters.style.display == "flex") {
      mainletters.style.display = "none";
      secondaryletters.style.display = "none";
    } else if (document.querySelector(".main-tile-1").getBoundingClientRect().top > window.outerHeight / 6 && mainletters.style.display == "none") {
      mainletters.style.display = "flex";
      secondaryletters.style.display = "flex";
    }

    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {

      //collect the tops of each tile section on the page
      var tiletops = [
        document.querySelector(".main-tile-0").getBoundingClientRect().top,
        document.querySelector(".main-tile-1").getBoundingClientRect().top,
        document.querySelector(".main-tile-2").getBoundingClientRect().top,
        document.querySelector(".main-tile-3").getBoundingClientRect().top,
        document.querySelector(".main-tile-4").getBoundingClientRect().top]

      // reset our target to null
      target = null;
      // loop through tiled sections
      for (var i = 0; i < tiletops.length; i++) {

        // these if and else if make it know if a tile is within 1/8 of the viewport 
        if (tiletops[i] >= 0 && tiletops[i] < window.outerHeight / 8) {
          item = ".main-tile-" + i;
          target = document.querySelector(item);
        } else if (tiletops[i] <= 0 && tiletops[i] > window.outerHeight / -8) {
          if (i != 4) {
            item = ".main-tile-" + i;
            target = document.querySelector(item);
          }

        }
      }
      if (target != null) {
        scroll.scrollTo(target);
      }



    }, 1000);
  }

}, false);
if (!mainPage) {
  var slideIndex = 1;

  var myTimer;

  var slideshowContainer;

  window.addEventListener("load", function () {
    showSlides(slideIndex);
    myTimer = setInterval(function () { plusSlides(1) }, 4000);
  })

  // NEXT AND PREVIOUS CONTROL
  function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
      showSlides(slideIndex -= 1);
    } else {
      showSlides(slideIndex += 1);
    }

    //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

    if (n === -1) {
      myTimer = setInterval(function () { plusSlides(n + 2) }, 4000);
    } else {
      myTimer = setInterval(function () { plusSlides(n + 1) }, 4000);
    }
  }

  //Controls the current slide and resets interval if needed
  function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function () { plusSlides(n + 1) }, 4000);
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  pause = () => {
    clearInterval(myTimer);
  }

  resume = () => {
    clearInterval(myTimer);
    myTimer = setInterval(function () { plusSlides(slideIndex) }, 4000);
  }

}

