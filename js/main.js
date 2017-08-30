var $banner = $('.banner');
var $star;
var i;

for (i = 0; i < 75; i++) {
  $star = $('<div>').addClass('star');
  $star.css({
    top: Math.random() * $banner.outerHeight(),
    left: Math.random() * $banner.outerWidth(),
    opacity: Math.random(),
    transform: 'rotate(' + Math.random() * 360 + 'deg) scale(' + Math.random() + ')'
  });

  $banner.append($star);
};
