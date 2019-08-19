$(document).ready(function() {
    $(".menu-icon").click(function() {
        $(".menu-icon").toggleClass('active');
    });
    $(".menu-icon").click(function() {
        $(".menu").toggleClass('active');
    });


    $(window).resize(function() {
        if ($(window).width() >= 768) {
            $(".menu-icon").removeClass('active');
            $(".menu").removeClass('active');
        }
    });

});