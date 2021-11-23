var i;

var numLoop= document.querySelectorAll(".drum").length;
for(i=0;i<numLoop;i++){
document.querySelectorAll("button")[i].addEventListener("click",function handleClick(){
this.style.color="white";
var buttonInnerHTML= this.innerHTML;

switch (buttonInnerHTML){
  case "w": var audio= new Audio("sounds/crash.mp3");
  audio.play();
  case "a": var audio= new Audio("sounds/kick-bass.mp3");
  audio.play();
  case "s": var audio= new Audio("sounds/snare.mp3");
  audio.play();
  case "d": var audio= new Audio("sounds/tom-1.mp3");
  audio.play();
  case "j": var audio= new Audio("sounds/tom-2.mp3");
  audio.play();
  case "k": var audio= new Audio("sounds/tom-3.mp3");
  audio.play();
  case "l": var audio= new Audio("sounds/tom-4.mp3");
  audio.play();
  break;

  default:
}
});
  
  
}

// var audio= new Audio("sounds/crash.mp3");
// audio.play();