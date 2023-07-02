$(function () {
  var mixer = mixitup('.blog__items');
  
  $('.customers__carousel').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    draggable: true,
    arrows: false,
    waitForAnimate: false,
    dots: true
  });

  $('.customers__carousel-prew').on('click', function (e){
    e.preventDefault()
    $('.customers__carousel').slick('slickPrev')
  });
  $('.customers__carousel-next').on('click', function (e){
    e.preventDefault()
    $('.customers__carousel').slick('slickNext')
  });
  


  $("#rateYo").rateYo({
    "rating" : 4.5
  });
});
Fancybox.bind()
