$(document).ready(function() {

    // var menuItem = $('.nav-right ul li');
    //
    // menuItem.mouseenter(function() {
    //   $(this).children().children('.dropdown-content').addClass('active');
    // });
    //
    // menuItem.mouseleave(function() {
    //   $(this).children().children('.dropdown-content').removeClass('active');
    // });

    $('.nav-right ul li').hover(

    function () {
        $(this).children().children('.dropdown-content').stop().slideDown({
          start:function () {
            $(this).css('display', 'flex');
          }
        });
    },

    function () {
        $(this).children().children('.dropdown-content').stop().slideUp()

    });
});
