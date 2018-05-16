$(window).on('scroll', function() {
    if($(window).scrollTop()) {
      $('nav').addClass('black')  
    }
    else { 
      $('nav').removeClass('black')
    }
})

 $(window).resize(function() {
    /*If browser resized, check width again */
    if ($(window).width() < 1000) {
     $('html').addClass('black');
    }
    else {$('html').removeClass('black');}
 });