(function () {
  var $li = $('#channelsWrap ul li');
  $li.hover(function (ev) {

    move.call(this, ev, true);

  }, function (ev) {
    move.call(this, ev, false);
  });

  function move(ev, bool) {

    var top = $(this).offset().top;
    var bottom = top + $(this).height();
    var left = $(this).offset().left;
    var right = left + $(this).width();

    var x = ev.pageX,
      y = ev.pageY;

    var sT = Math.abs(y - top),
      sB = Math.abs(y - bottom),
      sL = Math.abs(x - left),
      sR = Math.abs(x - right);

    var a = Math.min(sT, sB, sL, sR);

    switch (a) {

      case sT:
        if (bool) {
          $(this).find('.cove').css({
            left: 0,
            top: '-388px'
          }).animate({
            top: 0
          }, 200);
        } else {
          $(this).find('.cove').stop(1, 1).animate({
            top: '-388px'
          }, 200);
        }
        break;

      case sB:
        if (bool) {
          $(this).find('.cove').css({
            left: 0,
            top: '388px'
          }).animate({
            top: 0
          }, 200);
        } else {
          $(this).find('.cove').stop(1, 1).animate({
            top: '388px'
          }, 200);
        }

        break;
      case sL:
        if (bool) {
          $(this).find('.cove').css({
            left: '-190px',
            top: 0
          }).animate({
            left: 0
          }, 200);
        } else {
          $(this).find('.cove').stop(1, 1).animate({
            left: '-190px'
          }, 200);
        }

        break;
      case sR:
        if (bool) {
          $(this).find('.cove').css({
            left: '190px',
            top: 0
          }).animate({
            left: 0
          }, 200);
        } else {
          $(this).find('.cove').stop(1, 1).animate({
            left: '190px'
          }, 200);
        }

        break;



    }

  };
})();


var viewSwiper = new Swiper('.team-slide .view .swiper-container', {
  // direction : 'vertical',
  on: {
    slideChangeTransitionStart: function () {
      // updateNavPosition()
    }
  }
})

$('.team-slide .view .arrow-left,.preview .arrow-left').on('click', function (e) {
  e.preventDefault()
  if (viewSwiper.activeIndex == 0) {
    viewSwiper.slideTo(viewSwiper.slides.length - 1, 1000);
    return
  }
  viewSwiper.slidePrev()
})
// $('.team-slide .view .arrow-left,.preview .arrow-left').on('mousedown', function () {
//   $(this)[0].style.background= "url('images/team-up-hover.png') no-repeat center center #69b4c3";
// })
// $('.team-slide .view .arrow-left,.preview .arrow-left').on('mouseup', function () {
//   $(this)[0].style.background= "url('images/team-up.png') no-repeat center center #ededed";
// })
// $('.team-slide .view .arrow-left,.preview .arrow-right').on('mousedown', function () {
//   $(this)[0].style.background= "url('images/team-down-hover.png') no-repeat center center #69b4c3";
// })
// $('.team-slide .view .arrow-left,.preview .arrow-right').on('mouseup', function () {
//   $(this)[0].style.background= "url('images/team-down.png') no-repeat center center #ededed";
// })
$('.team-slide .view .arrow-right,.preview .arrow-right').on('click', function (e) {
  e.preventDefault()
  if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
    viewSwiper.slideTo(0, 1000);
    return
  }
  viewSwiper.slideNext()
})

var previewSwiper = new Swiper('.team-slide .preview .swiper-container', {
  //visibilityFullFit: true,
  direction : 'vertical',
  slidesPerView: 'auto',
  allowTouchMove: false,
  spaceBetween : 10,
  on: {
    tap: function () {
      viewSwiper.slideTo(previewSwiper.clickedIndex)
    }
  }
})

function updateNavPosition() {
  $('.team-slide .preview .active-nav').removeClass('active-nav')
  var activeNav = $('.team-slide .preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav')
  if (!activeNav.hasClass('swiper-slide-visible')) {
    if (activeNav.index() > previewSwiper.activeIndex) {
      var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1
      previewSwiper.slideTo(activeNav.index() - thumbsPerNav)
    } else {
      previewSwiper.slideTo(activeNav.index())
    }
  }
}