
var target = null;
const teamletters = document.querySelector("#tletters");
teamletters.style.display = "flex";

const video = document.querySelector("#v0");
video.style.display = "none";
const scroll = new LocomotiveScroll({
    

});

// Setup isScrolling variable
var isScrolling;

// Listen for scroll events
window.addEventListener('scroll', function ( event ) {
    if(document.querySelector(".bg-tile-1").getBoundingClientRect().top <= 0 && teamletters.style.display == "flex") {
        teamletters.style.display = "none";
        video.style.display = "flex";
    }
    if(teamletters.style.display == "none" && document.querySelector(".bg-tile-1").getBoundingClientRect().top >= 0){
        teamletters.style.display = "flex";
        video.style.display = "none";
    }

    if(document.querySelector(".bg-tile-2").getBoundingClientRect().top == 0) {
        video.style.width = "50%";

    }
	// Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );

	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {

        //collect the tops of each tile section on the page
        var tiletops = [
            document.querySelector(".bg-tile-0").getBoundingClientRect().top,
            document.querySelector(".bg-tile-1").getBoundingClientRect().top,
            document.querySelector(".bg-tile-2").getBoundingClientRect().top,
            document.querySelector(".bg-tile-3").getBoundingClientRect().top]

        // reset our target to null
        target = null;
        // loop through tiled sections
        for(var i = 0; i<tiletops.length; i++) {
            
            // these if and else if make it know if a tile is within 1/6 of the viewport 
            if(tiletops[i] >= 0 && tiletops[i] < window.outerHeight/6) {
                item = ".bg-tile-" + i;
                target = document.querySelector(item);
            } else if(tiletops[i] <= 0 && tiletops[i] > window.outerHeight/-6) {
                item = ".bg-tile-" + i;
                target = document.querySelector(item);
            }
        }
        if(target != null) {
            scroll.scrollTo(target);
        }

		

	}, 40);

}, false);

var frameNumber = 0, // start video at frame 0
        // lower numbers = faster playback
        playbackConst = 300, 
        // get page height from video duration
         
        // select video element         
        vid = document.getElementById('v0'); 
        // var vid = $('#v0')[0]; // jquery option


        // Use requestAnimationFrame for smooth playback
        function scrollPlay(){  
            var frameNumber  = window.pageYOffset/playbackConst;
            vid.currentTime  = frameNumber;
        window.requestAnimationFrame(scrollPlay);
        }

        window.requestAnimationFrame(scrollPlay);



