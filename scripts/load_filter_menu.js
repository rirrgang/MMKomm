function openFilterMenu() {
    var filterMenu = document.getElementById("filter_menu_vue");
    var settingsMenu = document.getElementById("settings_menu_vue");
    if (filterMenu.style.display === "none") {
        filterMenu.style.display = "block";
        settingsMenu.style.display = "none";
        document.getElementById("modal_darkener").style.display = "block";
    } else {
        filterMenu.style.display = "none";
        settingsMenu.style.display = "none";
        document.getElementById("modal_darkener").style.display = "none";
    }
  
  }
  
  function closeFilterMenu() {
    document.getElementById("filter_menu_vue").style.display = "none";
    document.getElementById("modal_darkener").style.display = "none";
  }
  
  
  function generate_FilterMenuBtn() {
    var filterMenuBtn = document.getElementById("filterMenu_btn");
  
    filterMenuBtn.classList.add("filterMenu_btn");
    filterMenuBtn.addEventListener("click", openFilterMenu);
  
    var filterMenuBtn_img_container = document.createElement("DIV");
    filterMenuBtn_img_container.classList.add("button__icon")
    filterMenuBtn.appendChild(filterMenuBtn_img_container);
  
    var filterMenuBtn_img = document.createElement("I");
    filterMenuBtn_img.classList.add("fas");
    filterMenuBtn_img.classList.add("fa-search-plus");
    filterMenuBtn_img_container.appendChild(filterMenuBtn_img);
  }

var modal_darkener = document.getElementById("modal_darkener");
if(modal_darkener){
    modal_darkener.addEventListener("click", closeFilterMenu);
}