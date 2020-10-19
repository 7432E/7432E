
var target = null;

const scroll = new LocomotiveScroll({
    

});

// Setup isScrolling variable
var isScrolling;

// Listen for scroll events
window.addEventListener('scroll', function ( event ) {

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
            
            // these if and else if make it know if a tile is within 1/4 of the viewport 
            if(tiletops[i] >= 0 && tiletops[i] < window.outerHeight/4) {
                item = ".bg-tile-" + i;
                target = document.querySelector(item);
            } else if(tiletops[i] <= 0 && tiletops[i] > window.outerHeight/-4) {
                item = ".bg-tile-" + i;
                target = document.querySelector(item);
            }
        }
        if(target != null) {
            scroll.scrollTo(target);
        }

		

	}, 40);

}, false);
// const target = document.querySelector('.bg-tile-2');


//scroll.scrollTo(target);



