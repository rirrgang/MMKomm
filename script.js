//GLOBAL VARIABLES
var top_headlines = [];
var breaking_news = check_for_cached_breakingNews_JSON("Facebook");

add_to_breaking_news(breaking_news.articles);

//FUNCTIONS
function add_to_breaking_news(bn_arr){
  for (var i=0; i < bn_arr.length; i++) {
    top_headlines.push(bn_arr[i].title);
  }
}



//Create Custom Generated Marquee Elements
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



var colors = ['rgb(0, 163, 108)', 'rgb(63, 0, 255)', 'rgb(31, 81, 255)', 'rgb(210, 125, 45)', 'rgb(128, 0, 0)', 'rgb(0, 255, 255)', 'rgb(255, 191, 0)', 'rgb(159, 43, 104)', 'rgb(218, 112, 214)'];

for(var i=0; i<top_headlines.length; i++){
  //Create HTML Nodes
  var text_container = document.createElement("DIV");
  var text_frame = document.createElement("SPAN");  
  var text = document.createTextNode(top_headlines[i]); //get Titles of the Articles

  if(colors.length == 0){
    colors.push('rgb(0, 163, 108)', 'rgb(63, 0, 255)', 'rgb(31, 81, 255)', 'rgb(210, 125, 45)', 'rgb(128, 0, 0)', 'rgb(0, 255, 255)', 'rgb(255, 191, 0)', 'rgb(159, 43, 104)', 'rgb(218, 112, 214)');
  }
  var x = Math.floor(Math.random() * colors.length);
  var random_color = colors[x]
  // var random_color = colors[Math.floor(Math.random() * colors.length)];
  console.log("NORMALE FARBE: " + random_color);
  console.log("DUNKLERE FARBE: " + darkenColor(random_color,50));
  text_container.style.background = "linear-gradient(to top, " + random_color + ", "+ darkenColor(random_color, 50) + " )" ;
  colors.splice(x, 1)
  
  //Append Children to container
  marquee_container.appendChild(text_container)
  text_container.appendChild(text_frame);
  text_frame.appendChild(text);

  //Add CSS Styles
  text_container.classList.add("text_container");
  text_frame.classList.add("text_frame");

}


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
