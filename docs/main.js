$(function () {
  var mixer = mixitup('.blog__items');
  
  $('.customers__carousel').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    draggable: false,
    arrows: false
  });

  $("#rateYo").rateYo({
    "rating" : 4.5
  });
});
Fancybox.bind()
