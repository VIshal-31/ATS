$(document).ready(function() {
    $('.testimonial-slider').slick({
        slidesToShow: 3, // Show 3 testimonials at a time
        slidesToScroll: 1,
        infinite: true,
        draggable: true,
        swipeToSlide: true, // Allow swipe to slide
        prevArrow: false, // Hide the previous arrow
        nextArrow: false, // Hide the next arrow
        responsive: [
            {
                breakpoint: 768, // Adjust breakpoints as needed
                settings: {
                    slidesToShow: 2, // Show 1 testimonial on smaller screens
                }
            }
        ]
    });
});
