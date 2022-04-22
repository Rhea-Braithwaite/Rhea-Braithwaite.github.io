// Scene 1
// Option 1 Google some stuff
// Option 2 Email Professor/TA for help

// Scene 2
// Option 1: Remainder from scene1
// Option 2: Message in the gc

// Scene 3
// Option 1: Remainder from scene 2
// Option 2: Texting an upperclassman

let option1 = document.getElementById('choice1');
let option2 = document.getElementById('choice2');
let choices_box = document.getElementById('choices-box');
let video = document.getElementById('scene-vid');
let vid_source = document.getElementById('vid-source');
var clicks = 0;

let videos = [];
let currentVid = 0;
for (let i = 1; i < 5; i++){
  videos.push('videos/vid'+i+'.mp4');
}
choices_box.style.visibility = "hidden";
choices_box.style.opacity = "0";

video.onended = function(){
  hide();
}

option1.onclick = function(){
  hide();
  clicks++;
  reset(option1);
  nextVideo();
}

option2.onclick = function(){
  hide();
  clicks++;
  reset(option2);
  nextVideo();
}

function hide(){
  if (choices_box.style.visibility == "visible"){
    choices_box.style.opacity = "0";
    choices_box.style.visibility = "hidden";
  }
  else if (choices_box.style.visibility == "hidden"){
    choices_box.style.opacity = "1";
    choices_box.style.visibility = "visible";
  }
}

function reset(option){
  switch(clicks){
    case 1:
      option.innerHTML = "Message in the groupchat";
      break;
    case 2:
      option.innerHTML = "Message an upperclassman";
      break;
  }
}

function nextVideo(){
  currentVid++;
  vid_source.src = videos[currentVid];
  video.load();
  video.play();
}
