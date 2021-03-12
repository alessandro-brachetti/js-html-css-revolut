$(document).ready(function() {

    var menuItem = $('.nav-right .dropdown a');

    menuItem.click(function() {
      $(this).next().toggleClass('active');
    });

});
