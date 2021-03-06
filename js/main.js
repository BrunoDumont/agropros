function scrollTo(selector) {
  $("html, body").animate({
    scrollTop: $(selector).offset().top - 20 + 'px'
  }, 500);
}

$(function() {

  $('a[href^="#"]').click(function(e) {
    e.preventDefault();
    scrollTo($(this).attr("href"));
  });

  $('.js-burger-btn').click(function () {
    $(this).children(".burger").toggleClass('burger--active');
    $(".submenu").toggleClass("visible");
  });

  var carouselSettings = {
    items:     1,
    loop:      true,
    mouseDrag: false,
    touchDrag: false,
    nav:       true,
    dots:      false
  };

  $(".js-presentation-slider")
    .addClass("owl-carousel")
    .owlCarousel(carouselSettings);

  $(".hero-slider")
    .addClass("owl-carousel")
    .owlCarousel(Object.assign(carouselSettings, {
      // autoplay:           true,
      autoplayTimeout:    2000,
      autoplayHoverPause: true,
    }));

  var $modal = $(".modal");
  var $body  = $("body");
  $(".js-open-popup").click(function() {
    $modal.addClass("visible");
    $body.addClass("scroll-disabled");

    $(".form__title").text($(this).attr("data-form-title"));
  });
  
  $(".js-close-popup").click(function() {
    $modal.removeClass("visible");
    $body.removeClass("scroll-disabled");
  });
  
  $(".js-send").click(function(e) {
    e.preventDefault();
    console.log("Sent!");
  });

  $(".js-burger-btn").click(function() {
    $(".nav--popup").addClass("visible");
    if (window.innerWidth < 768) {
      $body.addClass("scroll-disabled");
    }
  });
 
  $(".nav__close").click(function() {
    $(".nav--popup").removeClass("visible");
    if (window.innerWidth < 768) {
      $body.removeClass("scroll-disabled");
    }
  });

  $(".modal").click(function(e) {
    if ( $(e.target).is( $(this) ) ) {
      $modal.removeClass("visible");
      $body.removeClass("scroll-disabled");
    }
  });

  $(document.body).click(function(e) {
    var $target  = $(e.target);
    var $submenu = $(".submenu");
    if (!(
      $target.is($submenu) ||
      $target.is($(".navigation__btn")) ||
      $target.parents(".navigation__btn").length ||
      $target.parents(".submenu").length
    )) {
      $submenu.removeClass("visible");
      $('.js-burger-btn').children(".burger").removeClass('burger--active');
    }
  });

});
