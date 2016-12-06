$(function() {

  // Add button back to top
  backtotop = $('<a href="javascript:void(0);" class="btn-back-to-top" title="Back to Top" id="button-top"><span aria-hidden="true" class="glyphicon glyphicon-arrow-up"></span></a>');
  backtotop.appendTo('body');
  backtotop.hide();
  
  $(function () {
    $(window).scroll(function() {
      return ($(this).scrollTop() >= 100 ? backtotop.stop().fadeIn() : backtotop.stop().fadeOut());
    });
    
    // Scroll body to top on click
    backtotop.click(function () {
        $('body, html').animate({scrollTop: 0}, 800, function() {
          $(this).blur();    
      });
    });
  });
});
