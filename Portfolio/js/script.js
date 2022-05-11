// Chapter 1 - 30MFF
var Page1 = (function() {
  // Load elements in book (the book cover, and the inner image)
  var config = {
      $bookBlock1 : $( '#bb-bookblock1' ),
      $navNext1 : $( '#bb-nav-next1' ),
      $navPrev1 : $( '#bb-nav-prev1' ),
    },
    init = function() {
      config.$bookBlock1.bookblock( {
        speed : 800,
        shadowSides : 0.8,
        shadowFlip : 0.7
      } );
      initEvents();
    },
    initEvents = function() {

      var $slides = config.$bookBlock1.children();

      // add navigation events
      // If the cover is clicked, open book to inner image
      config.$navNext1.on( 'click touchstart', function() {
        console.log("TEST next");
        config.$bookBlock1.bookblock( 'next' );
        return false;
      } );
      // If the inner image is clicked, close book to cover
      config.$navPrev1.on( 'click touchstart', function() {
        console.log("TEST prev");
        config.$bookBlock1.bookblock( 'prev' );
        return false;
      } );
    };

    return { init : init };

})();

Page1.init();

// Chapter 2: Comic
var Page2 = (function() {
    // Load elements in book (the book cover, and the inner image)
  var config = {
      $bookBlock2 : $( '#bb-bookblock2' ),
      $navNext2 : $( '#bb-nav-next2' ),
      $navPrev2 : $( '#bb-nav-prev2' ),
    },
    init = function() {
      config.$bookBlock2.bookblock( {
        speed : 800,
        shadowSides : 0.8,
        shadowFlip : 0.7
      } );
      initEvents();
    },
    initEvents = function() {

      var $slides = config.$bookBlock2.children();

      // add navigation events
      // If the cover is clicked, open book to inner image
      config.$navNext2.on( 'click touchstart', function() {
        config.$bookBlock2.bookblock( 'next' );
        return false;
      } );

      // If the inner image is clicked, close book to cover
      config.$navPrev2.on( 'click touchstart', function() {
        config.$bookBlock2.bookblock( 'prev' );
        return false;
      } );
    };

    return { init : init };

})();

Page2.init()

// Chapter 3: Sound
var Page3 = (function() {
  // Load elements in book (the book cover, and the inner image)
  var config = {
      $bookBlock3 : $( '#bb-bookblock3' ),
      $navNext3 : $( '#bb-nav-next3' ),
      $navPrev3 : $( '#bb-nav-prev3' ),
    },
    init = function() {
      config.$bookBlock3.bookblock( {
        speed : 800,
        shadowSides : 0.8,
        shadowFlip : 0.7
      } );
      initEvents();
    },
    initEvents = function() {

      var $slides = config.$bookBlock3.children();

      // add navigation events
      // If the cover is clicked, open book to inner image
      config.$navNext3.on( 'click touchstart', function() {
        config.$bookBlock3.bookblock( 'next' );
        return false;
      } );
      // If the inner image is clicked, close book to cover
      config.$navPrev3.on( 'click touchstart', function() {
        config.$bookBlock3.bookblock( 'prev' );
        return false;
      } );
    };

    return { init : init };

})();

Page3.init()

// Chapter 4 - Video
var Page4 = (function() {
  // Load elements in book (the book cover, and the inner image)
  var config = {
      $bookBlock4 : $( '#bb-bookblock4' ),
      $navNext4 : $( '#bb-nav-next4' ),
      $navPrev4 : $( '#bb-nav-prev4' ),
    },
    init = function() {
      config.$bookBlock4.bookblock( {
        speed : 800,
        shadowSides : 0.8,
        shadowFlip : 0.7
      } );
      initEvents();
    },
    initEvents = function() {

      var $slides = config.$bookBlock4.children();

      // add navigation events
      // If the cover is clicked, open book to inner image
      config.$navNext4.on( 'click touchstart', function() {
        config.$bookBlock4.bookblock( 'next' );
        return false;
      } );
      // If the inner image is clicked, close book to cover
      config.$navPrev4.on( 'click touchstart', function() {
        config.$bookBlock4.bookblock( 'prev' );
        return false;
      } );
    };

    return { init : init };

})();

Page4.init()
