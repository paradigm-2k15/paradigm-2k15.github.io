
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
/**
 * @name		Shuffle Letters
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/09/shuffle-letters-effect-jquery/
 * @license		MIT License
 */

(function($){

	$.fn.shuffleLetters = function(prop){

		var options = $.extend({
			"step"		: 8,			// How many times should the letters be changed
			"fps"		: 30,			// Frames Per Second
			"text"		: "", 			// Use this text instead of the contents
			"callback"	: function(){}	// Run once the animation is complete
		},prop)

		return this.each(function(){

			var el = $(this),
				str = "";


			// Preventing parallel animations using a flag;

			if(el.data('animated')){
				return true;
			}

			el.data('animated',true);


			if(options.text) {
				str = options.text.split('');
			}
			else {
				str = el.text().split('');
			}

			// The types array holds the type for each character;
			// Letters holds the positions of non-space characters;

			var types = [],
				letters = [];

			// Looping through all the chars of the string

			for(var i=0;i<str.length;i++){

				var ch = str[i];

				if(ch == " "){
					types[i] = "space";
					continue;
				}
				else if(/[a-z]/.test(ch)){
					types[i] = "lowerLetter";
				}
				else if(/[A-Z]/.test(ch)){
					types[i] = "upperLetter";
				}
				else {
					types[i] = "symbol";
				}

				letters.push(i);
			}

			el.html("");

			// Self executing named function expression:

			(function shuffle(start){

				// This code is run options.fps times per second
				// and updates the contents of the page element

				var i,
					len = letters.length,
					strCopy = str.slice(0);	// Fresh copy of the string

				if(start>len){

					// The animation is complete. Updating the
					// flag and triggering the callback;

					el.data('animated',false);
					options.callback(el);
					return;
				}

				// All the work gets done here
				for(i=Math.max(start,0); i < len; i++){

					// The start argument and options.step limit
					// the characters we will be working on at once

					if( i < start+options.step){
						// Generate a random character at thsi position
						strCopy[letters[i]] = randomChar(types[letters[i]]);
					}
					else {
						strCopy[letters[i]] = "";
					}
				}

				el.text(strCopy.join(""));

				setTimeout(function(){

					shuffle(start+1);

				},1000/options.fps);

			})(-options.step);


		});
	};

	function randomChar(type){
		var pool = "";

		if (type == "lowerLetter"){
			pool = "abcdefghijklmnopqrstuvwxyz0123456789";
		}
		else if (type == "upperLetter"){
			pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		}
		// else if (type == "symbol"){
		// 	pool = ",.?/\\(^)![]{}*&^%$#'\"";
		// }

		var arr = pool.split('');
		return arr[Math.floor(Math.random()*arr.length)];
	}

})(jQuery);

//end of shuffle leeters plugin




var main = function(){

var classArray=new Array();
classArray[2]=1;
var backToEvents = 0;

var topBarHeight=$('.top-bar').height();

var winHeight= $(window).height(),
    scrollDownPos= $(window).width()/2 - 25;

$(".scroll-down").css("left",scrollDownPos);

if ($(window).width()<550) {
  $('.nav-box').hide();
  $('.menu-button').show();
  $('.nav li').css("display","list-item");

  $('.menu-button').click(function(){
    $(".top-bar").addClass("top-bar-black");
    $('.nav-box').toggle();
  });
  $(".nav a").click(function(){$('.nav-box').toggle();});
  $('.event-container').hide();
  $('.row').removeClass('row');
  $('.add').addClass('row');
  $('.columns').removeClass('three').addClass('six')
  $('.event-content').css('display','block');
  $('.info-close').hide();
  $('.event-container').removeAttr('name');
  $('.event-content').attr('name','Events');
  // setInt
}

$(".home-slide").css("height",winHeight);
$(".event-content").css("height",winHeight-topBarHeight);



// NOTE: smooth scroller cods starts

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - topBarHeight + 1 // + 1 for firefox bug
        }, 1000);
        return false;
      }
    }
  });
//  smooth scroller ends

$(".scroll-down").click(function(){
  $('html,body').animate({
    scrollTop: $(".home-slide").height() - $(".top-bar").height()
  }, 600);
});

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

  if(winScroll >= 2){topBar.addClass("top-bar-black");$("a[href$='Home']").addClass("nav-active");}
  else if(winScroll < 2){
    topBar.removeClass("top-bar-black");$("a[href$='Home']").removeClass("nav-active");
    if ($(window).width()<550) {
      $(".nav-box").css("display","none");
    }
}

  if((homeHeight-topBarHeight) <= winScroll){
      // topBar.addClass("top-bar-black");
      activeNav.removeClass("nav-active");
      $("a[href$='Home']").removeClass("nav-active");
      $("a[href$='About']").addClass("nav-active");
  }
  else if ((homeHeight-topBarHeight) > winScroll){
    // topBar.removeClass("top-bar-black");
    $("a[href$='About']").removeClass("nav-active");
  }

  if((homeHeight+aboutHeight+100 -topBarHeight ) <= winScroll){  //+100 for compensating padding
    activeNav.removeClass("nav-active");
    $("a[href$='About']").removeClass("nav-active");
    $("a[href$='Team']").addClass("nav-active");
  }
  else if((homeHeight+aboutHeight+100 -topBarHeight ) > winScroll){
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

  if(totalEventScrollHeight  <= winScroll ){    //firefox bug 1px compensation
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

// NOTE: event hover code begins


$('.event_column').on("mouseenter",function(){
  $(this).children('.eventhover').addClass("event-hover-active");
});

$('.event_column').on("mouseleave",function(){
  $(this).children('.eventhover').removeClass("event-hover-active");
});

$(".event_column").click(function(){
  classArray =$(this).attr('class').split("-");
  $(".event-active").addClass("event-inactive").removeClass("event-active");
  $(".event-"+classArray[2]).addClass('event-active').show();
  $(".event-content").show();
  backToEvents = $(window).scrollTop();
  $('html,body').animate({
    scrollTop: $(".home-slide").height() + $(".about-container").height() + $(".team-container").height() + $(".event-container").height() + 200 - topBarHeight
  }, 600);
});
// NOTE: event hover code ends


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

index=0;
items=$('.event');
item=$('.event').eq(index);

function cycle() {
  item=$('.event').eq(index);
  items.hide();
  item.show();
}


$('.leftarrow').click(function (){
  $(".event-active").addClass("event-inactive").removeClass("event-active");
  classArray[2]--;
  if (classArray[2]<=0) {
    classArray[2]=items.length;
  }
  $(".event-"+classArray[2]).addClass('event-active').show();
  reset();
});

$('.rightarrow').click(function (){
  $(".event-active").addClass("event-inactive").removeClass("event-active").hide();
  classArray[2]++;
  classArray[2] %= items.length+1;
  if (classArray[2]==0) {
    classArray[2]=1;
  }
  $(".event-"+classArray[2]).addClass('event-active').show();
  reset();
});


$('.info-close').click(function (){
 $('html,body').animate({
   scrollTop: backToEvents
 }, 600,function(){$('.event-content').hide();});
  // $('.event-content').hide();
});

// NOTE: event detials slider ends


}

$(document).ready(main);

$(window).load(function(){
  var $post_para = $(".post-para"),
      $digm = $(".digm"),
      $pre_para = $(".pre-para");

      $("#loading-screen").slideUp(600, function(){$("html,body").css("overflow-y","auto");});

      $pre_para.removeClass("invisible"); $digm.text("noid");
   setTimeout(function(){$pre_para.shuffleLetters({ "text": "to" });$digm.shuffleLetters({ "text": "drop" });},1000);
   setTimeout(function(){$pre_para.shuffleLetters({ "text": "into the" });$digm.shuffleLetters({ "text": "dise" });},2000);
   setTimeout(function(){$pre_para.shuffleLetters({ "text": "of a new" });$digm.shuffleLetters({ "text": "digm" });},3000);

   setTimeout(function(){$pre_para.addClass("invisible");$post_para.fadeIn(600); $digm.text("digm");},4000);

});

  window.addEventListener("orientationchange",function(){location.reload();}, false);
