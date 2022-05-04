let content = document.getElementById("content");
let submitButton = document.getElementById("submit-top");
content.style.visibility ='hidden'; //Only make video visible and the about segment visible

function makeButtenNotHighlighted (){ //Mouse is within button dimensions
      submitButton.style.background = "black";
      submitButton.style.color = "white";

}
function makeButtenHighlighted (){ //Mouse is outsise button dimensions
      submitButton.style.background = "white";
      submitButton.style.color = "black";
}

submitButton.addEventListener('mouseenter', makeButtenHighlighted);
submitButton.addEventListener('mouseleave', makeButtenNotHighlighted);


function scroll (){ //Make additional content of webapge visible after the user begins scrolling
  if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
    content.style.visibility = 'visible';
  }else{
    content.style.visibility = 'hidden'; //Hides content when the user returns to the top of the page
  }
}

window.onscroll = function() {
  scroll();
}
