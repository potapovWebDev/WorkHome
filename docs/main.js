$(function () {
  var mixer = mixitup('.blog__items');
  
  $('.customers__carousel').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    draggable: true,
    arrows: false,
    waitForAnimate: false,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
      $(this).children('.questions__acc-text').slideDown()
    }
  })

  $(".header__nav-item").on("click","a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();

      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
          top = $(id).offset().top;
        
      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({scrollTop: top}, 1500);
  });
  $(".footer__bottom-item").on("click","a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();

      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
          top = $(id).offset().top;
        
      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({scrollTop: top}, 1500);
  });

  setInterval (() => {
    if ($(window).scrollTop() > 0) {
      $('.burger').addClass('burger_follow')
    } else {
      $('.burger').removeClass('burger_follow')
    }
  }, 0);
  $('.burger').on('click', function (e) {
    e.preventDefault()
    $('.header').toggleClass('header_active')
  })
  $('.burger').on('click', function (e) {
    e.preventDefault()
    $('.burger').toggleClass('burger_active')
  })
    
  


  $("#rateYo").rateYo({
    "rating" : 4.5
  });
});
Fancybox.bind()
