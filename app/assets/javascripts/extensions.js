// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
    interval: false
});

//for every slide in carousel, copy the next slide's item in the slide.
//Do the same for the next, next item.
//$('.multi-item-carousel .item').each(function () {
//    var next = $(this).next();
//    if (!next.length) {
//        next = $(this).siblings(':first');
//    }
//    next.children(':first-child').clone().appendTo($(this));
//
//    if (next.next().length > 0) {
//        next.next().children(':first-child').clone().appendTo($(this));
//    } else {
//        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
//    }
//});



$(document).ready(function() {
    $("#theExtensions").swiperight(function() {
        $(this).carousel('prev');
    });
    $("#theExtensions").swipeleft(function() {
        $(this).carousel('next');
    });

    var correctMySize = function(){
        var correctHeight = ($('.ui-page-active').height()-24) / 2;
        console.log(correctHeight);
        $('.extension').height(correctHeight);
    };

    $( window ).resize(function() {
        correctMySize();
    });

    $( window ).on("orientationchange", function( event ) {
        location.href = location.href;
    });

    correctMySize();


    $(".extension").not(".extension-static").not(".extension-cam").click(function(e) {
        if ($(this).hasClass('extension-on')) {
            // call OFF

            $(this).removeClass('extension-on');
        } else {
            // call ON

            $(this).addClass('extension-on');
        }
    });
});

