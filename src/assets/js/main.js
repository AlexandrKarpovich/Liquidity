$(document).ready(function() {
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 10)
                $('.header').addClass('header--slicky');
            else
                $('.header').removeClass('header--slicky');
        });
    });
    $('.show_much').click(function(e) {
        e.preventDefault()
        $(this).toggleClass('hide');
        $('.lizy').removeClass('hide');
        $('.hide_much').removeClass('hide');
    })
    $('.hide_much').click(function(e) {
        e.preventDefault()
        $(this).toggleClass('hide');
        $('.lizy').toggleClass('hide');
        $('.show_much').removeClass('hide');
    })
});