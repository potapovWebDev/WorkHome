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