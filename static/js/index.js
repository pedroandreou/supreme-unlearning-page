window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: false,        // Disable loop for single slide
        infinite: false,    // Disable infinite for single slide
        autoplay: false,    // Disable autoplay for single slide
        navigation: false,  // Disable navigation arrows for single slide
        pagination: false   // Disable pagination dots for single slide
    }

    // Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

})
