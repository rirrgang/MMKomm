function openSettingsMenu() {
  var settingsMenu = document.getElementById("settings_menu_vue");
  var filterMenu = document.getElementById("filter_menu_vue");
  if (settingsMenu.style.display === "none") {
    settingsMenu.style.display = "block";
    filterMenu.style.display = "none";
    document.getElementById("modal_darkener").style.display = "block";
  } else {
    settingsMenu.style.display = "none";
    filterMenu.style.display = "none";
    document.getElementById("modal_darkener").style.display = "none";
  }

}

function closeSettingsMenu() {
  document.getElementById("settings_menu_vue").style.display = "none";
  document.getElementById("modal_darkener").style.display = "none";
}

function submitSettings() {
  Location.reload(true);
}


function generate_SettingsBtn() {
  var settingsBtn = document.getElementById("settings_btn");

  settingsBtn.classList.add("button");
  settingsBtn.addEventListener("click", openSettingsMenu);

  var settingsBtn_img_container = document.createElement("DIV");
  settingsBtn_img_container.classList.add("button__icon")
  settingsBtn.appendChild(settingsBtn_img_container);

  var settingsBtn_img = document.createElement("I");
  settingsBtn_img.classList.add("fas");
  settingsBtn_img.classList.add("fa-sliders-h");
  settingsBtn_img_container.appendChild(settingsBtn_img);


  var settings_close_btn = document.getElementsByClassName("settings-cancel-button")[0];
  var checkExist = setInterval(function () {
    if (settings_close_btn) {
      settings_close_btn.addEventListener("click", closeSettingsMenu);
      clearInterval(checkExist);
    } else {
      settings_close_btn = document.getElementsByClassName("settings-cancel-button")[0];
    }
  }, 100); // check every 100ms



}

var modal_darkener = document.getElementById("modal_darkener");
if (modal_darkener) {
  modal_darkener.addEventListener("click", closeSettingsMenu);
}

function load_saved_settings() {

  try {
    var settings = JSON.parse(localStorage.getItem("settings"));
    
    show_articles(settings.show_articles);
    set_saved_settings(settings);
    set_news_ticker_bottom_pos(settings.news_ticker_bottom_pos);

    animate_Marquee();


  } catch (error) {
    console.log("Error in script: load_settings.js\r\nat position: 50\r\nFailed to Parse JSON");
    console.log("create standard settings...")
    create_standard_settings();
    console.log("creation finished.")
  }

}

function create_standard_settings(){
  var settings = {
    news_ticker_bottom_pos: false,
    show_articles: false,
    max_articles_count: 5
  };

  localStorage.setItem("settings", JSON.stringify(settings));
}

function set_saved_settings(settings) {
  var settings_inner_container = document.getElementsByClassName("settings-inner-container")[0];
  var checkExist = setInterval(function () {
    if (settings_inner_container) {
      var news_ticker_bottom_pos_cb = document.getElementById("news_ticker_bottom_pos");
      if (settings.news_ticker_bottom_pos) {
        news_ticker_bottom_pos_cb.checked = true;
      }
      var show_articles_cb = document.getElementById("show_articles");
      if (settings.show_articles) {
        show_articles_cb.checked = true;
      }
      var max_articles_count_range = document.getElementById("max_articles_count");
      max_articles_count_range.value = settings.max_articles_count;



      clearInterval(checkExist);
    } else {
      settings_inner_container = document.getElementsByClassName("settings-inner-container")[0];
    }
  }, 100); // check every 100ms
}

function save_settings_to_localStorage() {

  var news_ticker_bottom_pos = document.getElementById("news_ticker_bottom_pos").checked;
  var show_articles = document.getElementById("show_articles").checked;
  var max_articles_count = document.getElementById("max_articles_count").value;

  var settings = {
    news_ticker_bottom_pos: news_ticker_bottom_pos,
    show_articles: show_articles,
    max_articles_count: max_articles_count
  };

  localStorage.setItem("settings", JSON.stringify(settings));

  location.reload();
}

function set_news_ticker_bottom_pos(is_bottom) {
  var marquee = document.getElementById("marquee_vue");
  var checkExist2 = setInterval(function () {
      if (marquee) {

        var news_boxes_vue = document.getElementById("news_boxes_vue");
        var scroll_ui_container = document.getElementsByClassName("scroll_ui_container")[0];
        var filterMenu_btn = document.getElementById("filterMenu_btn");
        var settings_btn = document.getElementById("settings_btn");

        if (is_bottom) {
          marquee.style.bottom = "0";
          marquee.style.top = "unset";
          news_boxes_vue.style.top = "0";
          news_boxes_vue.style.paddingBottom = "62px";
          scroll_ui_container.style.top = "unset";
          scroll_ui_container.style.bottom = "1px";
          filterMenu_btn.style.top = "unset";
          filterMenu_btn.style.bottom = "1px";
          settings_btn.style.top = "unset";
          settings_btn.style.bottom = "1px";
        }

        marquee = document.getElementById("marquee_vue");
        if(marquee.style.bottom == "0px"){
          clearInterval(checkExist2);
        }
        

        
      } else {
        marquee = document.getElementById("marquee_vue");
      }
    },
    100); // check every 100ms
    

}

function show_articles(show_articles) {
    load_news_from_checkboxes(show_articles);
}





load_saved_settings();