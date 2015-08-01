var main = function(){


var backToEvents = 0;

var topBarHeight=$('.top-bar').height();

var winHeight= $(window).height();
$(".home-slide").css("height",winHeight);
$(".event-content").css("height",winHeight-topBarHeight);

//para-shuffler code begins
var $post_para = $(".post-para"),
    $digm = $(".digm"),
    $pre_para = $(".pre-para");
// $pre_para.shuffleLetters();
//  $digm.shuffleLetters();


 setTimeout(function(){$pre_para.shuffleLetters({ "text": "to" });$digm.shuffleLetters({ "text": "drop" });},1000);
 setTimeout(function(){$pre_para.shuffleLetters({ "text": "into the" });$digm.shuffleLetters({ "text": "dise" });},2000);
 setTimeout(function(){$pre_para.shuffleLetters({ "text": "of a new" });$digm.shuffleLetters({ "text": "digm" });},3000);

 setTimeout(function(){$pre_para.addClass("invisible");$post_para.fadeIn(600);},4000);

//para-shuffler code ends


// NOTE: smooth scroller cods starts

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - topBarHeight
        }, 1000);
        return false;
      }
    }
  });
//  smooth scroller ends


// NOTE: top bar scroller starts
var scroll_changes = function(){
  var winScroll = $(this).scrollTop(),
      topBar= $(".top-bar"),
      homeHeight = $(".home-slide").height(),
      activeNav = $(".nav-active"),
      aboutHeight = $(".about-container").height(),
      teamHeight = $(".team-container").height(),
      eventGridHeight = $(".event-container").height(),
      eventContentHeight = $(".event-content").height(),
      totalEventScrollHeight = homeHeight+aboutHeight+100+teamHeight+eventGridHeight+100-topBarHeight;

if($(".event-content").css("display") == "block") totalEventScrollHeight += eventContentHeight;

// console.log($(".event-content"));

  if((homeHeight-topBarHeight) <= winScroll){
      topBar.addClass("top-bar-black");
      activeNav.removeClass("nav-active");
      $("a[href$='About']").addClass("nav-active");
  }
  else if ((homeHeight-topBarHeight) > winScroll){
    topBar.removeClass("top-bar-black");
    $("a[href$='About']").removeClass("nav-active");
  }

  if((homeHeight+aboutHeight+100 -topBarHeight) <= winScroll){  //+100 for compensating padding
    activeNav.removeClass("nav-active");
    $("a[href$='About']").removeClass("nav-active");
    $("a[href$='Team']").addClass("nav-active");
  }
  else if((homeHeight+aboutHeight+100 -topBarHeight) > winScroll){
    $("a[href$='Team']").removeClass("nav-active");
  }

  if((homeHeight+aboutHeight+100+teamHeight-topBarHeight) <= winScroll){
    activeNav.removeClass("nav-active");
    $("a[href$='About']").removeClass("nav-active");
    $("a[href$='Team']").removeClass("nav-active");
    $("a[href$='Events']").addClass("nav-active");
  }
  else if((homeHeight+aboutHeight+100+teamHeight-topBarHeight) > winScroll){
    $("a[href$='Events']").removeClass("nav-active");
  }

  if(totalEventScrollHeight <= winScroll ){
    activeNav.removeClass("nav-active");
    $("a[href$='About']").removeClass("nav-active");
    $("a[href$='Team']").removeClass("nav-active");
    $("a[href$='Events']").removeClass("nav-active");
    $("a[href$='Register']").addClass("nav-active");
  }
}

scroll_changes();

$(window).scroll(scroll_changes);

// NOTE: top bar scroller ends


// NOTE: event details slider begins

$('.instruct').hide();

$('.ins').click(function(){
   $('.event-image').hide();
   $('.instruct').show();
   $('.ins').attr("disabled","disabled");
   // $('.ins').css('box-shadow','-.1em -.1em -.2em .4em  #111');

});

$('.ins-close').click(function(){
  $('.instruct').hide();
  $('.event-image').show();
  $('.ins').removeAttr("disabled");
 // $('.ins').css('box-shadow','-.1em -.1em -.2em .4em  #111');
});

function reset(){
  $('.event-image').show();
  $('.instruct').hide();
  $('.ins').removeAttr("disabled");
}

// index=0;
items=$('.event');
// item=$('.event').eq(index);

// function cycle() {
//   item=$('.event').eq(index);
//   items.hide(400);
//   item.show(600);
// }

$('.leftarrow').click(function (){
  $(".event-active").addClass("event-inactive").removeClass("event-active");
  classArray[2]--;
  if (classArray[2]<=0) {
    classArray[2]=items.length;
  }
  $(".event-"+classArray[2]).addClass('event-active').show();
  // index-=1;
  // if(index<0){
  //   index=items.length - 1 ;}
  // cycle();
  reset();
  // var currSlide=$(".event-active");
  // var prevSlide = currSlide.prev();
  // // console.log(nextSlide);
  // if(prevSlide.length == 0){
  //   prevSlide = $(".event").last();
  // }
  // currSlide.fadeOut(400).removeClass("event-active");
  // reset();
  // prevSlide.fadeIn(400).addClass("event-active");

});

$('.rightarrow').click(function (){
  $(".event-active").addClass("event-inactive").removeClass("event-active").hide();
  classArray[2]++;
  classArray[2] %= items.length+1;
  if (classArray[2]==0) {
    classArray[2]=1;
  }
  $(".event-"+classArray[2]).addClass('event-active').show();
  // index+=1;
  // index%=items.length;
  // cycle();
  reset();
  // var currSlide=$(".event-active");
  // var nextSlide = currSlide.next();
  // // console.log(nextSlide);
  // if(nextSlide.length == 0){
  //   nextSlide = $(".event").first();
  // }
  // currSlide.fadeOut(400).removeClass("event-active");
  // reset();
  // nextSlide.fadeIn(400).addClass("event-active");
});




// $('.leftarrow').click(function (){
//  var currSlide=$(".event-active");
//  var prevSlide = currSlide.prev();
//  // console.log(nextSlide);
//  if(prevSlide.length == 0){
//    prevSlide = $(".event").last();
//  }
//  currSlide.fadeOut(400).removeClass("event-active");
//  reset();
//  prevSlide.fadeIn(400).addClass("event-active");
//
// });
//
// $('.rightarrow').click(function (){
//  var currSlide=$(".event-active");
//  var nextSlide = currSlide.next();
//  // console.log(nextSlide);
//  if(nextSlide.length == 0){
//    nextSlide = $(".event").first();
//  }
//  currSlide.fadeOut(400).removeClass("event-active");
//  reset();
//  nextSlide.fadeIn(400).addClass("event-active");
// });

$('.info-close').click(function (){
 $('html,body').animate({
   scrollTop: backToEvents
 }, 600,function(){$('.event-content').hide();});
  // $('.event-content').hide();
});

// NOTE: event detials slider ends

// NOTE: event hover code begins


$('.event_column').on("mouseenter",function(){
  $(this).children('.eventhover').addClass("event-hover-active");
});

$('.event_column').on("mouseleave",function(){
  $(this).children('.eventhover').removeClass("event-hover-active");
});

$(".event_column").click(function(){
  classArray =$(this).attr('class').split("-");
  // var classArray =$(this).e;
  $(".event-active").addClass("event-inactive").removeClass("event-active");
  $(".event-"+classArray[2]).addClass('event-active').show();
  // $(".event-"+classArray).addClass('event-active').show();
  $(".event-content").show();
  backToEvents = $(window).scrollTop();
  $('html,body').animate({
    scrollTop: $(".home-slide").height() + $(".about-container").height() + $(".team-container").height() + $(".event-container").height() + 200 - topBarHeight
  }, 600);
});
// NOTE: event hover code ends



}
$(document).ready(main);
