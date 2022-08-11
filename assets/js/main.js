$(window).scroll(function(){
    var header = $('.header'),
      scroll = $(window).scrollTop();
  
      if (scroll >= 70) header.addClass('fixed');
      else header.removeClass('fixed');
  });

  let navItem = document.querySelectorAll('ul li a');

  navItem.forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector('.active').classList.remove('active')
      item.classList.add('active')
    });
  });

  let navItems = document.querySelectorAll('ul li a');

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector('.active').classList.remove('active')
      item.classList.add('active')
    });
  });


// slider js start//
$('.homepage-slider').owlCarousel({
  loop:true,
  nav:false,
  dots:false,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});

$('.projects-slider').owlCarousel({
  loop:true,
  nav:false,
  items:3,
  dots:true,
  margin: 30,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
});
$('.tesimonial-slider').owlCarousel({
  loop:true,
  nav:false,
  margin: 30,
  dots:true,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
});

$('.counter').counterUp({
    delay: 10,
    time: 1000
});