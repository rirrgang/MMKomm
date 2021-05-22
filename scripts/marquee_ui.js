function toggle_animate_marquee(){
    var anim_state = marquee_container.style.animationPlayState;
    switch(anim_state){
      case "paused":
        btn_toggle_image.style.content = "url('/@resources/icons/pause_icon.png')";
        marquee_container.style.animationPlayState = "running";
        break;
      case "running":
        btn_toggle_image.style.content = "url('/@resources/icons/play_icon.png')";
        marquee_container.style.animationPlayState = "paused";
        break;
      default:
        btn_toggle_image.style.content = "url('/@resources/icons/play_icon.png')";
        marquee_container.style.animationPlayState = "paused";
        break;
    }
  }