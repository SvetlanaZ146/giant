$(function(){

  
  


$('.slider__inner')
.on('init', () => {
  $('.slick-slide[data-slick-index="-3"]').addClass('lt3');
  $('.slick-slide[data-slick-index="-2"]').addClass('lt2');
  $('.slick-slide[data-slick-index="-1"]').addClass('lt1');
  $('.slick-slide[data-slick-index="1"]').addClass('gt1');
  $('.slick-slide[data-slick-index="2"]').addClass('gt2');
  $('.slick-slide[data-slick-index="3"]').addClass('gt3');
})
$('.slider__inner').slick({
centerMode: true,
centerPadding: 0,
slidesToShow: 6,
responsive: [
  {
    breakpoint: 770,
    settings: {
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      swipe: true
    }
  },
],

prevArrow:`<div class="arrow-left"></div>`,
nextArrow:`<div class="arrow-right"></div>`,


}).on('beforeChange', (event, slick, current, next) => {
$('.slick-slide.gt3').removeClass('gt3');
$('.slick-slide.gt2').removeClass('gt2');
$('.slick-slide.gt1').removeClass('gt1');
$('.slick-slide.lt1').removeClass('lt1');
$('.slick-slide.lt2').removeClass('lt2');
$('.slick-slide.lt3').removeClass('lt3');





const lt3 = (current < next && current > 0) ? current - 2 : next - 3;
const lt2 = (current < next && current > 0) ? current - 1 : next - 2;
const lt1 = (current < next && current > 0) ? current : next - 1;
const gt1 = (current < next || next === 0) ? next + 1 : current;
const gt2 = (current < next || next === 0) ? next + 2 : current + 1;
const gt3 = (current < next || next === 0) ? next + 3 : current + 2;

$(`.slick-slide[data-slick-index="${lt3}"]`).addClass('lt3');
$(`.slick-slide[data-slick-index="${lt2}"]`).addClass('lt2');
$(`.slick-slide[data-slick-index="${lt1}"]`).addClass('lt1');
$(`.slick-slide[data-slick-index="${gt1}"]`).addClass('gt1');
$(`.slick-slide[data-slick-index="${gt2}"]`).addClass('gt2');
$(`.slick-slide[data-slick-index="${gt3}"]`).addClass('gt3');

// Clone processing when moving from 5 to 0
if (current === 6 && next === 0) {
  
  $(`.slick-slide[data-slick-index="${current - 2}"]`).addClass('lt3');
  $(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('lt2');
  $(`.slick-slide[data-slick-index="${current}"]`).addClass('lt1');
  $(`.slick-slide[data-slick-index="${current + 1}"]`).addClass('gt1');
  $(`.slick-slide[data-slick-index="${current + 2}"]`).addClass('gt2');
  $(`.slick-slide[data-slick-index="${current + 3}"]`).addClass('gt3');
}

// Clone processing when moving from 0 to 5
if (current === 0 && next === 6) {
  $(`.slick-slide[data-slick-index="${current - 2}"]`).addClass('gt3');
  $(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('gt2');
  $(`.slick-slide[data-slick-index="${current}"]`).addClass('gt1');
  $(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('lt1');
  $(`.slick-slide[data-slick-index="${current - 2}"]`).addClass('lt2');
  $(`.slick-slide[data-slick-index="${current - 3}"]`).addClass('lt3');
}


console.log('beforeChange', current, ':', lt3,lt2, lt1, next, gt1, gt2, gt3);
});



});
$(function(){
  $('.reviews__slider-inner').slick({
  centerMode: true,
  centerPadding: 0,
  slidesToShow: 3,
  speed: 500,
  variableWidth: true,
  prevArrow:`<div class="button-left"></div>`,
  nextArrow:`<div class="button-right"></div>`,
  
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        
        arrows: false,
        centerPadding: '150px',
        dots: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true,
      }
    },
  ]
  
});

$('.menu').on('click', function() {
  $('.header__navigation-items').toggleClass('menu__list--active');
}); 
  
  
  
});
  
   

