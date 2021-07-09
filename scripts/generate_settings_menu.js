function generate_settings_menu() {
    Vue.component('settings_menu_vue', {
        template: `
            <div class="settings-outer-container">
            <div class="settings-over-inner-header">
                <div class="settings-search-for-latest">News Ticker Options</div>
                <button class="settings-cancel-button"><i class="fas fa-times"></i></button>
            </div>
            <div class="settings-inner-container">
            <div class="settings-checkbox-text">Position News Ticker at Bottom?</div>
            <div class="settings-checkbox-container">
                <label class="switch">
                    <input type="checkbox" id="news_ticker_bottom_pos">
                    <span class="slider round"></span>
                </label>
            </div>

            <div class="settings-checkbox-text">Show Articles?</div>
            <div class="settings-checkbox-container">
                <label class="switch">
                    <input type="checkbox" id="show_articles">
                    <span class="slider round"></span>
                </label>
            </div>

            <div class="settings-checkbox-text">How many Articles?</div>
            <div class="range-slider-container">
            <input type="range" min="1" max="9" value="3" class="range-slider" id="max_articles_count">
            <div class="range-slider-data">
            <datalist id="tickmarks">
                <option value="1">1</option>
                <option value="2">'</option>
                <option value="3">3</option>
                <option value="4">'</option>
                <option value="5">5</option>
                <option value="6">'</option>
                <option value="7">7</option>
                <option value="8">'</option>
                <option value="9">9</option>
            </datalist>
            </div>
           </div>

           <div class="settings-container-below">
                <button class="settings-save-button" onmousedown="save_settings_to_localStorage()">Save Settings</button>
            </div>
                
            
            </div>
        </div>`
    });

    new Vue({
        el: '#settings_menu_vue'
    });

}
