var i = 0;
$banner = $('.banner');

for (i = 0; i < 75; i++) {
  var $star = $('<div>').addClass('star');

  $star.css({
    'top': Math.random() * ($banner.outerHeight()),
    'left': Math.random() * ($banner.outerWidth()),
    'opacity': Math.random(),
    'transform': 'rotate(' + Math.floor(Math.random() * 360) + 'deg) scale(' + Math.floor(Math.random() * 4) + ')'
  });

  $banner.append($star);
};
