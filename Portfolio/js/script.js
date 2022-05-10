AOS.init();

//On click if audio is not playing
//playing
//On click if audio is playing then
//stop playing

var Page1 = (function() {

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
      config.$navNext1.on( 'click touchstart', function() {
        console.log("TEST next");
        config.$bookBlock1.bookblock( 'next' );
        return false;
      } );

      config.$navPrev1.on( 'click touchstart', function() {
        console.log("TEST prev");
        config.$bookBlock1.bookblock( 'prev' );
        return false;
      } );
    };

    return { init : init };

})();

Page1.init();

var Page2 = (function() {

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
      config.$navNext2.on( 'click touchstart', function() {
        config.$bookBlock2.bookblock( 'next' );
        return false;
      } );

      config.$navPrev2.on( 'click touchstart', function() {
        config.$bookBlock2.bookblock( 'prev' );
        return false;
      } );
    };

    return { init : init };

})();

Page2.init()


var Page3 = (function() {

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
      config.$navNext3.on( 'click touchstart', function() {
        config.$bookBlock3.bookblock( 'next' );
        return false;
      } );

      config.$navPrev3.on( 'click touchstart', function() {
        config.$bookBlock3.bookblock( 'prev' );
        return false;
      } );
    };

    return { init : init };

})();

Page3.init()

var Page4 = (function() {

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
      config.$navNext4.on( 'click touchstart', function() {
        config.$bookBlock4.bookblock( 'next' );
        return false;
      } );

      config.$navPrev4.on( 'click touchstart', function() {
        config.$bookBlock4.bookblock( 'prev' );
        return false;
      } );
    };

    return { init : init };

})();

Page4.init()
