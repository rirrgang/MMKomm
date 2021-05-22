//FUNCTIONS
function add_to_breaking_news_array(bn_arr){
  for (var i=0; i < bn_arr.length; i++) {
    //breaking_news_array.push(bn_arr[i].title);
    add_to_breaking_news(bn_arr[i].title)
  }
}

function add_to_breaking_news(article_title){
  breaking_news_array.push(article_title);
  //Create HTML Nodes
  var text_container = document.createElement("DIV");
  var text_frame = document.createElement("SPAN");  
  var text = document.createTextNode(article_title); //get Titles of the Articles

  //Set random background color for each element
  text_container.style.background = getRandomColor();

  //Append Children to container
  var marquee_container = document.getElementsByClassName("marquee_container")[0];
  marquee_container.appendChild(text_container)
  text_container.appendChild(text_frame);
  text_frame.appendChild(text);

  //Add CSS Styles
  text_container.classList.add("text_container");
  text_frame.classList.add("text_frame");
}

function remove_from_breaking_news(){
  //Get element from breaking news array
  var article_title = breaking_news_array.slice(0,1)[0];
  
  //Get text_container HTML-Node
  var text_frames = document.getElementsByClassName("text_frame");
  var text_frame = null;
  for (var i = 0; i < text_frames.length; i++) {
    if(text_frames[i].innerHTML == article_title){
      text_frame = text_frames[i];
      break;
    }
  }
  var text_container = text_frame.parentElement;
  text_container.remove(); 

  //Delete First Element from marquee row
  breaking_news_array.splice(0,1);

  //Append title_node back to marquee row
  add_to_breaking_news(article_title);
  
}




//GLOBAL VARIABLES
var breaking_news_array = [];
var breaking_news = check_for_cached_breakingNews_JSON("Facebook");

//Main
generateMarquee();
add_to_breaking_news_array(breaking_news.articles);
animate_Marquee();

generate_news_boxes();





