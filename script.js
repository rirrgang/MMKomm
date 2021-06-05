//GLOBAL VARIABLES--------------------------------------------------------
//language options: ar, de, en, es, fr, he, it, nl, no, pt, ru, se, ud, zh
var language = 'en';
var country = 'us';

var breaking_news_array = [];
var breaking_news = check_for_cached_breakingNews_JSON("business");
var normal_news = check_for_cached_news_JSON("Microsoft");

//------------------------------------------------------------------------


//MAIN--------------------------------------------------------------------

//PAGE GENERATION
  generateMarquee();
  generate_SettingsBtn();
  generate_settings();


//Load Top Headlines + Custom Marquee Animation
  add_to_breaking_news_array(breaking_news.articles);
  document.addEventListener('DOMContentLoaded', function(event) {
    animate_Marquee();
  })
  
  load_news_from_checkboxes();
//------------------------------------------------------------------------