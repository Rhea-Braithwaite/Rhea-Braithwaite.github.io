// Scene 1
// Option 1 Google some stuff
// Option 2 Email Professor/TA for help

// Scene 2
// Option 1: Remainder from scene1
// Option 2: Message in the gc

// Scene 3
// Option 1: Remainder from scene 2
// Option 2: Texting an upperclassman
// var winScroll
// window.onscroll = function() {
//   winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   console.log(winScroll);
// }

let option1 = document.getElementById('choice1');
let option2 = document.getElementById('choice2');
let choices_box = document.getElementById('choices-box');
let video = document.getElementById('scene-vid');
let vid_source = document.getElementById('vid-source');
var clicks = 0;
var opt1 = 1;
var opt2 = 2;
var clicked = 0;
var last=false;
// var vid_alt = document.getElementById('vid-section').getBoundingClientRect();

let videos = [];
let currentVid = 1;
for (let i = 1; i < 6; i++){
  videos.push('videos/vid'+i+'.mp4');
}
choices_box.style.visibility = "hidden";
choices_box.style.opacity = "0";

video.onended = function(){
  if(last == false){
    choices_box.classList.remove('notransition');
    console.log("Showing options");
    hide();
  }

}


option1.onclick = function(){
  var temp1 = opt1;
  clicked = 1;
  choices_box.classList.add('notransition');
  hide();
  clicks++;
  reset(option1);
  nextVideo(temp1);
  //Update what next video may be
  switch (clicks) {
    case 1:
      opt1 = 3;
      break;
    case 2:
      opt1 = 4;
      break;
  }
}

option2.onclick = function(){
  var temp2 = opt2;
  clicked = 2;
  choices_box.classList.add('notransition');
  hide();
  clicks++;
  reset(option2);
  nextVideo(temp2);
  //Update what next video might be
  switch (clicks) {
    case 1:
      opt2 = 3;
      break;
    case 2:
      opt2 = 4;
      break;
  }
}

function hide(){
  if (choices_box.style.visibility == "visible"){

    choices_box.style.visibility = "hidden";
    choices_box.style.opacity = "0";
  }
  else if (choices_box.style.visibility == "hidden"){

    choices_box.style.visibility = "visible";
    choices_box.style.opacity = "1";
  }
}

function reset(update){
  console.log("Clicks", clicks);
  console.log("Update",update.innerHTML);
  switch(clicks){
    case 1:
      update.innerHTML = "Message in the groupchat";
      break;
    case 2:
      update.innerHTML = "Message an upperclassman";
      break;
    case 3:
      console.log("Last");
      // console.log(remaining.innerHTML);
      if(update.innerHTML != "Message an upperclassman"){
        console.log("Last");
        if(clicked == 1){
          option1.style.display = "none";
        }else{
          option2.style.display = "none";
        }
      }else{
        // choices_box.style.visibility = "hidden";
        last = true;
      }
      break;
    case 4:{
      // choices_box.style.visibility = "hidden";
      last = true;
      break;
    }
  }
  console.log("to",update.innerHTML);
}

function nextVideo(nextVid){
  currentVid = nextVid;
  vid_source.src = videos[currentVid];
  video.load();
  video.play();
  // window.scrollTo(0, val);
  // console.log('Val:', val);
}
