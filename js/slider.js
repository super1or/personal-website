$('.sl').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    asNavFor: '.sl2'
});

$('.sl2').slick({
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: '45px',
    slidesToShow: 5,
    asNavFor: '.sl',
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: false,
        slidesToShow: 3,
        infinite: true,
        dots: true,
      }
    },
     {
      breakpoint: 480,
      settings: {
        centerMode: false,  
        slidesToShow: 2,
        infinite: true,
        dots: false,
      }
    }
  ]
});

