$('.sl').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: '25px',
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
     {
      breakpoint: 480,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    }
  ]
});
