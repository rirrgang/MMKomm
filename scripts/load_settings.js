function openSettings() {
  //   document.getElementById("myForm").style.display = "block";
  var settings = document.getElementById("settings_menu");
  if (settings.style.display === "none") {
      settings.style.display = "block";
      document.getElementById("modal_darkener").style.display = "block";
  } else {
      settings.style.display = "none";
      document.getElementById("modal_darkener").style.display = "none";
  }

}

function closeSettings() {
  document.getElementById("settings_menu").style.display = "none";
  document.getElementById("modal_darkener").style.display = "none";
}


function generate_SettingsBtn() {
  var settingsBtn = document.getElementById("settings_btn");

  settingsBtn.classList.add("button");
  settingsBtn.addEventListener("click", openSettings);

  var settingsBtn_img_container = document.createElement("DIV");
  settingsBtn_img_container.classList.add("button__icon")
  settingsBtn.appendChild(settingsBtn_img_container);

  var settingsBtn_img = document.createElement("I");
  settingsBtn_img.classList.add("fas");
  settingsBtn_img.classList.add("fa-sliders-h");
  settingsBtn_img_container.appendChild(settingsBtn_img);
}