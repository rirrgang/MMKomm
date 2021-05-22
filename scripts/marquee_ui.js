var animation = null;
var duration = 10;
function animate_Marquee(){
  var marquee_container = document.getElementsByClassName("marquee_container")[0];
  var start_position = 150;
  var position = start_position;

  var text_container = document.getElementsByClassName("text_container")[0];
  var text_container_style = getComputedStyle(text_container);
  var width = text_container_style.width.match(/\d+/)[0];

  animation = setInterval(function(){
    if(play_state != "paused"){
      position--; 
      marquee_container.style.left = position + "px";

      if(position <= start_position-width){
        stop_animate_Marquee(); 
        remove_from_breaking_news(); 
        marquee_container.style.left = start_position+2 + "px"; 
        animate_Marquee();
      }
    }  
  }, duration);
  
}

function stop_animate_Marquee(){
  clearInterval(animation);
}





var play_state = "running";
function toggle_animate_marquee(){
    var marquee_container = document.getElementsByClassName("marquee_container")[0];
    var btn_toggle_image = document.getElementsByClassName("btn_toggle_image")[0];

    switch(play_state){
      case "paused":
        btn_toggle_image.style.content = "url('/@resources/icons/pause_icon.png')";
        play_state = "running";
        break;
      case "running":
        btn_toggle_image.style.content = "url('/@resources/icons/play_icon.png')";
        play_state = "paused";
        break;
      default:
        btn_toggle_image.style.content = "url('/@resources/icons/play_icon.png')";
        play_state = "paused";
        break;
    }
  }

