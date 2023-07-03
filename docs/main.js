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

  $('.questions__acc-item').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('questions__acc-item--active')) {
      $(this).removeClass('questions__acc-item--active')
      $(this).children('.questions__acc-text').slideUp()
    } else {
      $('.questions__acc-item').removeClass('questions__acc-item--active')
      $('.questions__acc-text').slideUp()
      $(this).addClass('questions__acc-item--active')
      $(this).children('.question__acc-text').slideDown()
    }
  })
  


  $("#rateYo").rateYo({
    "rating" : 4.5
  });
});
Fancybox.bind()
