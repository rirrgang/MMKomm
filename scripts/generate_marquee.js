function generateMarquee(){
    //Create Custom Generated Marquee Element
    var marquee = document.createElement("DIV");
    marquee.classList.add("marquee");
  
    //Create Breaking News Container
    var breaking_news_container = document.createElement("DIV");
    breaking_news_container.classList.add("breaking_news_container");
  
    //Create Breaking News Text
    var breaking_news_text = document.createElement("H1");
    breaking_news_text.classList.add("breaking_news_text");
    breaking_news_text.innerHTML = "BREAKING NEWS";
    breaking_news_container.appendChild(breaking_news_text);
  
    //Create Marquee Container Element
    var marquee_container = document.createElement("DIV");
    marquee_container.classList.add("marquee_container");
  
    //Create UI for Scrolling Animation
    var scroll_ui_container = document.createElement("DIV");
    scroll_ui_container.classList.add("scroll_ui_container");
  
  
  
  //Start + Stop Button für Scroll Animation
    var btn_start_and_stop_anim = document.createElement("DIV");
    btn_start_and_stop_anim.classList.add("btn_start_and_stop_anim");
    var btn_toggle_image = document.createElement("IMG");
    btn_toggle_image.classList.add("btn_toggle_image");
    btn_start_and_stop_anim.appendChild(btn_toggle_image);
  
    scroll_ui_container.appendChild(btn_start_and_stop_anim);
    //btn_start_and_stop_anim.innerHTML = "Toggle Stop";
    btn_start_and_stop_anim.onmousedown = function(){toggle_animate_marquee();}
  
    //Marquee in HTML-Doc hinzufuegen
    var marq = document.getElementById("marquee");
    marq.appendChild(marquee);
    // document.body.appendChild(marquee);
    marquee.appendChild(breaking_news_container)
    marquee.appendChild(marquee_container);
    marquee.appendChild(scroll_ui_container);
  
  }