$(document).ready(function() {
    let burger = $(".navbar__burger");
    let navbar = $("#navbar");
    $(burger).on('click', e => {
        $(navbar).toggleClass('active')

    })

});