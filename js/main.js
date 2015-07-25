var main = function(){

var winHeight= $(window).height();
$(".home-slide").css("height",winHeight);

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
          scrollTop: target.offset().top - 75
        }, 1000);
        return false;
      }
    }
  });
//  smooth scroller ends

var scroll_changes = function(){
  var winScroll = $(this).scrollTop(),
      topBar= $(".top-bar"),
      homeHeight = $(".home-slide").height(),
      activeNav = $(".nav-active");

  if((homeHeight-75) <= winScroll){
      topBar.addClass("top-bar-black");
      activeNav.removeClass("nav-active");
      $("a[href$='About']").addClass("nav-active");
  }
  else if ((homeHeight-75) > winScroll){
    topBar.removeClass("top-bar-black");
    $("a[href$='About']").removeClass("nav-active");
  }
}

scroll_changes();

$(window).scroll(scroll_changes);


}
$(document).ready(main);
