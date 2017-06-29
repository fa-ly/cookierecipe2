var menu = document.querySelector('select');
var articles = document.querySelectorAll('article');
var list = ['all', 'almond', 'butter', 'chocolate'];

menu.addEventListener('change', function(){
  if (menu.value !== 'all') {
    for (var i = 0; i < articles.length; i++) {
      articles[i].classList.add('hide');

      if (articles[i].classList.contains(menu.value)) {
        articles[i].classList.remove('hide');
      }
    }
  } else {
    for (var i = 0; i < articles.length; i++) {
      articles[i].classList.remove('hide');
    }
  }
})

var openBtn = $('.open-menu'); /* $ represents document.querySelector */
var closeBtn = $('.close-menu');
var mobileNav = $('nav');

openBtn.on('click', function(){
  mobileNav.fadeIn(3000);
  $('body').addClass('stop-scroll');
})
/*on replaces addEventListener */

closeBtn.on('click', function(){
  mobileNav.fadeOut(2000); /* 2000 represents 2 seconds */
  $('body').removeClass('stop-scroll');
})
