


// (function ($) {
//     "use strict";

//     // Navbar on scrolling
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 200) {
//             $('.navbar').fadeIn('slow').css('display', 'flex');
//         } else {
//             $('.navbar').fadeOut('slow').css('display', 'none');
//         }
//     });


//     // Smooth scrolling on the navbar links
//     $(".navbar-nav a").on('click', function (event) {
//         if (this.hash !== "") {
//             event.preventDefault();
            
//             $('html, body').animate({
//                 scrollTop: $(this.hash).offset().top - 45
//             }, 1500, 'easeInOutExpo');
            
//             if ($(this).parents('.navbar-nav').length) {
//                 $('.navbar-nav .active').removeClass('active');
//                 $(this).closest('a').addClass('active');
//             }
//         }
//     });


//     // Modal Video
//     $(document).ready(function () {
//         var $videoSrc;
//         $('.btn-play').click(function () {
//             $videoSrc = $(this).data("src");
//         });
//         console.log($videoSrc);

//         $('#videoModal').on('shown.bs.modal', function (e) {
//             $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
//         })

//         $('#videoModal').on('hide.bs.modal', function (e) {
//             $("#video").attr('src', $videoSrc);
//         })
//     });


//     // Scroll to Bottom
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 100) {
//             $('.scroll-to-bottom').fadeOut('slow');
//         } else {
//             $('.scroll-to-bottom').fadeIn('slow');
//         }
//     });


//     // Portfolio isotope and filter
//     var portfolioIsotope = $('.portfolio-container').isotope({
//         itemSelector: '.portfolio-item',
//         layoutMode: 'fitRows'
//     });
//     $('#portfolio-flters li').on('click', function () {
//         $("#portfolio-flters li").removeClass('active');
//         $(this).addClass('active');

//         portfolioIsotope.isotope({filter: $(this).data('filter')});
//     });
    
    
//     // Back to top button
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 200) {
//             $('.back-to-top').fadeIn('slow');
//         } else {
//             $('.back-to-top').fadeOut('slow');
//         }
//     });
//     $('.back-to-top').click(function () {
//         $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
//         return false;
//     });


//     // Gallery carousel
//     $(".gallery-carousel").owlCarousel({
//         autoplay: false,
//         smartSpeed: 1500,
//         dots: false,
//         loop: true,
//         nav : true,
//         navText : [
//             '<i class="fa fa-angle-left" aria-hidden="true"></i>',
//             '<i class="fa fa-angle-right" aria-hidden="true"></i>'
//         ],
//         responsive: {
//             0:{
//                 items:1
//             },
//             576:{
//                 items:2
//             },
//             768:{
//                 items:3
//             },
//             992:{
//                 items:4
//             },
//             1200:{
//                 items:5
//             }
//         }
//     });
    
// })(jQuery);






(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Modal Video
    // $(document).ready(function () {
    //     var $videoSrc;
    //     $('.btn-play').click(function () {
    //         $videoSrc = $(this).data("src");
    //     });
    //     console.log($videoSrc);

    //     $('#videoModal').on('shown.bs.modal', function (e) {
    //         $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    //     })

    //     $('#videoModal').on('hide.bs.modal', function (e) {
    //         $("#video").attr('src', $videoSrc);
    //     })
    // });

    // Modal Video
$(document).ready(function () {
    var $videoSrc; // Store the video source from the button's data attribute

    // When the play button is clicked, get the video source
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src"); // Get the data-src from the clicked button
    });

    // When the modal is shown
    $('#videoModal').on('shown.bs.modal', function (e) {
        // Set the video src and autoplay the video
        $("#video").attr('src', $videoSrc + "?autoplay=1&modestbranding=1&showinfo=0");
    });

    // When the modal is hidden
    $('#videoModal').on('hide.bs.modal', function (e) {
        // Stop the video and remove the src attribute to stop loading the video
        $("#video").attr('src', '');
    });
});



    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });


    // Countdown Timer for Wedding Date
    // Set the date of the wedding (format: "YYYY-MM-DD")
    const weddingDate = new Date('2025-02-13T00:00:00').getTime();

    // Update the countdown every second
    const countdownTimer = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();

        // Calculate the distance between now and the wedding date
        const distance = weddingDate - now;

        // Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the elements with corresponding IDs
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(countdownTimer);
            document.getElementById('countdown').innerHTML = "The Wedding Day Has Arrived!";
        }
    }, 1000); // Updates every second

})(jQuery);
