$('#menu-toggle').click(function(){
  $(this).toggleClass('open');
  $('.header').toggleClass('header_active')
})
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
  dots: true,
});

$('.services-slide__arrow_l').on('click', function (e){
  e.preventDefault()
  $('.services-slide__carousel').slick('slickPrev')
});
$('.services-slide__arrow_r').on('click', function (e){
  e.preventDefault()
  $('.services-slide__carousel').slick('slickNext')
});

Fancybox.bind()