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
    fill.style.height = max - scrolled + "%";

}

window.onscroll = function() {
  scroll();
}
