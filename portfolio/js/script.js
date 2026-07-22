function toggleNav(){
  var navBar = document.getElementById("nav-bar");
  document.getElementById("nav-bar").classList.toggle("mobile");
}

let resizeTimer;
window.addEventListener('resize', () => {
  document.body.classList.add('no-transition');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('no-transition');
  }, 150);
});

function createBookInstance(bookSelector, nextSelector, prevSelector){
  // Load elements in book (the book cover, and the inner image)
  var config = {
      $bookBlock : $( bookSelector ),
      $navNext: $( nextSelector ),
      $navPrev: $( prevSelector ),
    };
  var init = function() {
      config.$bookBlock.bookblock( {
        speed : 800,
        shadowSides : 0.8,
        shadowFlip : 0.7
      } );
      initEvents();
    };

    var initEvents = function() {
    // add navigation events
      // If the cover is clicked, open book to inner image
      config.$navNext.on( 'click touchstart', function() {
        console.log("TEST next");
        config.$bookBlock.bookblock( 'next' );
        return false;
      } );
      // If the inner image is clicked, close book to cover
      config.$navPrev.on( 'click touchstart', function() {
        console.log("TEST prev");
        config.$bookBlock.bookblock( 'prev' );
        return false;
      } );
    };

    return { init : init };

};

var Page1 = createBookInstance('#bb-bookblock1', '#bb-nav-next1', '#bb-nav-prev1');
var Page2 = createBookInstance('#bb-bookblock2', '#bb-nav-next2', '#bb-nav-prev2');
var Page3 = createBookInstance('#bb-bookblock3', '#bb-nav-next3', '#bb-nav-prev3');
var Page4 = createBookInstance('#bb-bookblock4', '#bb-nav-next4', '#bb-nav-prev4');
var Page5 = createBookInstance('#bb-bookblock5', '#bb-nav-next5', '#bb-nav-prev5');
var Page6 = createBookInstance('#bb-bookblock6', '#bb-nav-next6', '#bb-nav-prev6');

$(function(){
  Page1.init();
  Page2.init();
  Page3.init();
  Page4.init();
  Page5.init();
  Page6.init();
});
