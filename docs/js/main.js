$('.about-slide__box').slick({
    arrows: false,
});

$('.about-slide__arrow-l').on('click', function (e){
    e.preventDefault()
    $('.about-slide__box').slick('slickPrev')
  });
  $('.about-slide__arrow-r').on('click', function (e){
    e.preventDefault()
    $('.about-slide__box').slick('slickNext')
  });

$('.services-slide__carousel').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
});

Fancybox.bind()