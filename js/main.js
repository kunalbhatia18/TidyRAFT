$(function () {
    $(window).scroll(function () {
         
            if ($(document).scrollTop() < 100) {
                $('nav').css("height", "13vh");
            }
            else {
                $('nav').css("height", "13vh");
            }
    });

    var scrollLink = $('.scroll');
    scrollLink.on('click', function (event) {
        if (this.hash !== "") {
            $('body, html').stop().animate({
                scrollTop: $(this.hash).offset().top - $('nav').height()
            }, 1000);
        }
    });

    // var topscroll = $('.top-scroll');
    // topscroll.on('click', function (event) {

    //     $('body, html').stop().animate({
    //         scrollTop: 0
    //     }, 1000);

    // });
});
