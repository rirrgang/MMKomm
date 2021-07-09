/********************************************/
/*             NEWS-TICKER-LOADER           */
/********************************************/
/* © 2021 Maximilian Ebert & Robert Irrgang */
/********************************************/

//<!-- GLOBAL VARIABLES --> -----------------------------------------------------------
//language options: ar, de, en, es, fr, he, it, nl, no, pt, ru, se, ud, zh
var language = 'en';
var country = 'us';

var global_generate_news_articles = true;
var global_display_ticker_at_top = false;

//<!-- UTILITY SCRIPTS --> -------------------------------------------------------
var script = document.createElement('script');
script.src = "scripts/darkenColor.js";
script.async = false;
document.body.appendChild(script);

var script = document.createElement('script');
script.src = "scripts/getRandomColors.js";
script.async = false;
document.body.appendChild(script);

var script = document.createElement('script');
script.src = "scripts/marquee_animation.js";
script.async = false;
document.body.appendChild(script);

//<!-- GENERATION SCRIPTS --> -------------------------------------------------------
var script = document.createElement('script');
script.src = "scripts/generate_marquee.js";
script.async = false;
document.body.appendChild(script);

var script = document.createElement('script');
script.src = "scripts/generate_settings_menu.js";
script.async = false;
document.body.appendChild(script);

var script = document.createElement('script');
script.src = "scripts/generate_news_boxes.js";
script.async = false;
document.body.appendChild(script);

var script = document.createElement('script');
script.src = "scripts/generate_filter_menu.js";
script.async = false;
document.body.appendChild(script);

//<!-- JSON LOADING SCRIPTS --> -------------------------------------------------------
var script = document.createElement('script');
script.src = "scripts/load_marquee.js";
script.async = false;
document.body.appendChild(script);

var script = document.createElement('script');
script.src = "scripts/cache_JSON_request.js";
script.async = false;
document.body.appendChild(script);

var script = document.createElement('script');
script.src = "scripts/load_cached_JSON_request.js";
script.async = false;
document.body.appendChild(script);

var script = document.createElement('script');
script.src = "scripts/load_news_query.js";
script.async = false;
document.body.appendChild(script);

var script = document.createElement('script');
script.src = "scripts/load_breaking_news_query.js";
script.async = false;
document.body.appendChild(script);

var script = document.createElement('script');
script.src = "scripts/load_settings.js";
script.async = false;
document.body.appendChild(script);

var script = document.createElement('script');
script.src = "scripts/load_filter_menu.js";
script.async = false;
document.body.appendChild(script);

//<!-- MAIN / INITIALIZING NEWS TICKER SCRIPT --> -------------------------------------------------------
document.addEventListener('DOMContentLoaded', function(event) {
    var script = document.createElement('script');
    script.src = "scripts/initializing_script.js";
    script.async = false;
    document.body.appendChild(script);
  });
