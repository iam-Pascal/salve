$(function () {
  /**
 * Initalize wow js
 */
  var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started the argument that is
      // passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  });
  wow.init();

  /**
 * Initalize owl carousel
 */
  var header = $('.owl-carousel');
  header.owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 6000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
  });

  $slideCount = $('[data-owl-index]').length / 2;
  header.on('change.owl.carousel', function (event) {
    $cur = $('.owl-item.active > .item').data('owl-index');
    $nxt = ($cur == $slideCount)
      ? 1
      : $cur + 1;
    // console.log($slideCount + ':' + $cur + ' -- ' + $nxt);
    $('.owl-item.active h4').removeClass('bounceInDown');
    $('.owl-item.active p')
      .removeClass('fadeInUp')
      .addClass('hidden');
    $('.owl-item.active .btn')
      .removeClass('fadeInUp')
      .addClass('hidden');
    $(".owl-item > [data-owl-index=" + $nxt + "] h4")
      .addClass('bounceInDown')
      .removeClass('hidden');
    $(".owl-item > [data-owl-index=" + $nxt + "] p")
      .addClass('fadeInUp')
      .removeClass('hidden');
    $(".owl-item > [data-owl-index=" + $nxt + "] .btn")
      .addClass('fadeInUp')
      .removeClass('hidden');
  });

  $(window).scroll(function () {
    console.log('Scrolled - ' + $(this).scrollTop());
    if ($(this).scrollTop() >= 1) 
      $('nav').addClass('scrolled');
    else 
      $('nav').removeClass('scrolled');
    }
  );

});