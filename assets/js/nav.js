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

  $(window).scroll(function () {
    // console.log('Scrolled - ' + $(this).scrollTop());
    if ($(this).scrollTop() >= 1) 
      $('nav.sticky').addClass('scrolled');
    else 
      $('nav.sticky').removeClass('scrolled');
    }
  );

  $('#mobile-nav-open').click(function (e) {
    e.preventDefault();
    $('.mobile-nav').addClass('open');
    $('body').addClass('mobile-nav-open');
  });

  $('#mobile-nav-close').click(function () {
    $('.mobile-nav').removeClass('open');
    $('body').removeClass('mobile-nav-open');
  });
});