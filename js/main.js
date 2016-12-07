jQuery(function($) {
  //Preloader
  var preloader = $('.preloader');
   $(window).on("load", function() {
    preloader.hide();
  });

  //#main-slider
  var slideHeight = $(window).height() - 141;
  $('#home-slider .item').css('height',slideHeight);

  $(window).resize(function(){
    $('#home-slider .item').css('height',slideHeight);
  });
  
  //Scroll Menu
  $(window).on('scroll', function(){
    if( $(window).scrollTop()>slideHeight ){
      $('.main-nav').addClass('navbar-fixed-top');
    } else {
      $('.main-nav').removeClass('navbar-fixed-top');
    }
  });
  
  //Navigation Scroll
  $(window).scroll(function(event) {
    Scroll();
  });

  $('.navbar-collapse ul li a').on('click', function() {  
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
    return false;
  });

  // User define function
  function Scroll() {
    var contentTop      =   [];
    var contentBottom   =   [];
    var winTop      =   $(window).scrollTop();
    var rangeTop    =   200;
    var rangeBottom =   500;
    $('.navbar-collapse').find('.scroll a').each(function(){
      contentTop.push( $( $(this).attr('href') ).offset().top);
      contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
    })
    $.each( contentTop, function(i){
      if ( winTop > contentTop[i] - rangeTop ){
        $('.navbar-collapse li.scroll')
        .removeClass('active')
        .eq(i).addClass('active');      
      }
    })
  };

  $('#tohash').on('click', function(){
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
    return false;
  });
  
  //Initiat WOW JS
  new WOW().init();

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
