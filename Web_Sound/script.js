AOS.init();

$('#arrow').click(function(){
$(document).scrollTop(850) // any value you need
});

let fill = document.getElementById("gauge-fill");
function scroll (){ //Make additional content of webapge visible after the user begins scrolling
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100 ;
    var max = 90;
    console.log(check);
    fill.style.height = max - scrolled + "%";

}

window.onscroll = function() {
  scroll();
}



var events=["abort","canplay","canplaythrough","durationchange","emptied","ended",
    "error","loadeddata","loadedmetadata","loadstart","pause","play","playing",
    "progress","ratechange","readystatechange","seeked","seeking","stalled",
    "suspend","timeupdate","volumechange","waiting"]
// The Plugin.
$.fn.scrollPlay=function(O){
  return this.each(function(){
    var audio=this
    audio.volume=0
    audio.play()
    $(window).on('scroll scroll-music',function(){
      var st=$(window).scrollTop(),
        isLoud=$(audio).is('.loud')
        loud=st>=O.top && st< O.bottom,
        isIgnored=$(audio).is('.ignored')
      if (isIgnored){
        if(audio.volume!=0){
          $(audio).trigger("scroll-before-off").stop().animate({volume:0},O.duration,function(){
              $(audio).trigger("scroll-off")
          })
        }
      }else if (isLoud !==loud){
        if (isLoud){
          $(audio).trigger("scroll-before-off").stop().animate({volume:0},O.duration,function(){
            $(audio).trigger("scroll-off")
          })
        }else{
          $(audio).trigger("scroll-before-on").stop().animate({volume:1},O.duration,function(){
            $(audio).trigger("scroll-on")
          })
        }
        $(audio).toggleClass('loud',loud)
      }
    }).trigger('scroll-music')
  })
}
// a simple way to call it.
$(function(){
  var set=localStorage.musicSet
  if (set)
    $('.set1,.set2').not('.'+set).addClass('ignored')
  else
    $('.set2').addClass('ignored')
  $('.switch').click(function(){
    var set=this.id
    localStorage.musicSet=set
    $('.set1,.set2').addClass('ignored').removeClass('loud').filter('.'+set).removeClass('ignored')
    $(window).trigger('scroll-music')
  })
// creating the dimensions of containers to play the sounds
  $('#soundTour2').scrollPlay({
    top:550,
    bottom:1320,
    duration:2000
  })

  $('#soundTour3').scrollPlay({
    top:1320,
    bottom:2090,
    duration:2000
  })

  $('#soundTour4').scrollPlay({
    top:2090,
    bottom:2860,
    duration:2000
  })
  $('#soundTour5').scrollPlay({
    top:2860,
    bottom:3630,
    duration:2000
  })
  $('#soundTour6').scrollPlay({
    top:3630,
    bottom:4400,
    duration:2000
  })
  $('#soundTour7').scrollPlay({
    top:4400,
    bottom:5170,
    duration:2000
  })

  $('audio').on({// only needed for debugging
    volumechange:function(){
      $('#monitor_'+this.id).width(this.volume*100).text(' ')
    },
    'scroll-before-off scroll-before-on scroll-off scroll-on':function(e){
      $('#musicStatus').prepend("<div>"+e.type +" " + $(this).attr('src')+"</div>")
    }
  })
  $(window).scroll(function(){
    var top=$(window).scrollTop(),
      currentDiv=0,
      active=false
    if (top<0) return
    $('.float').parent().each(function(i){
      var float=$(this).find('.float'),
        dTop = $(this).offset().top,
        dHeight=$(this).outerHeight(),
        bHeight=float.outerHeight(),
        dBottom = dTop + dHeight,
        current = dTop <= top && dBottom >= top
      if(current) {
        active=current&& top-dTop<dHeight-bHeight
        currentDiv=i
        if(active){
          float.css({top:top-dTop})
        }
        return false
      }
    })
    $('.float').each(function(i){
      if(i<currentDiv || (i==currentDiv && !active))
        $(this).css({top:$(this).parent().outerHeight()-$(this).outerHeight()})
      else if(i>currentDiv)
        $(this).css({top:0})
    })
  }).trigger('scroll')
})
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document. documentElement.clientWidth)
    );
}
