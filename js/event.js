$(document).ready(function() {
   $('.instruct').hide();

  $('.ins').click(function inst(){
      $('.instruct').show();
      $('.ins').attr("disabled","disabled");
      // $('.ins').css('box-shadow','-.1em -.1em -.2em .4em  #111');

  });
  $('.ins-close').click(function reset(){
    $('.instruct').hide();
    $('.ins').removeAttr("disabled");
    // $('.ins').css('box-shadow','-.1em -.1em -.2em .4em  #111');
  });

  function reset(){
    $('.instruct').hide();
    $('.ins').removeAttr("disabled");
  }

  index=0;
  items=$('.event');
  // item=$('.event').eq(index);

  function cycle() {
    item=$('.event').eq(index);
    items.fadeOut(400);
    item.fadeIn(600);
  }

  $('.leftarrow').click(function (){
    // index-=1;
    // if(index<0){
    //   index=items.length - 1 ;}
    // cycle();
    // reset();
    var currSlide=$(".event-active");
    var prevSlide = currSlide.prev();
    // console.log(nextSlide);
    if(prevSlide.length == 0){
      prevSlide = $(".event").last();
    }
    currSlide.fadeOut(400).removeClass("event-active");
    reset();
    prevSlide.fadeIn(400).addClass("event-active");

  });

  $('.rightarrow').click(function (){
    // index+=1;
    // index%=items.length;
    // cycle();
    // reset();
    var currSlide=$(".event-active");
    var nextSlide = currSlide.next();
    // console.log(nextSlide);
    if(nextSlide.length == 0){
      nextSlide = $(".event").first();
    }
    currSlide.fadeOut(400).removeClass("event-active");
    reset();
    nextSlide.fadeIn(400).addClass("event-active");
  });

  $('.info-close').click(function closeevent(){
    $('.event-content').hide();
  });


});
