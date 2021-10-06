$(document).ready(function () {
  
$(function () {
  $(document).scroll(function () {
    var $nav = $(".mainmenu");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height()*5);
  });
});
});
