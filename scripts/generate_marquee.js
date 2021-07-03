function generateMarquee(){

  Vue.component('marquee_vue', {
    template: `
    <div class="marquee">
        <div class="breaking_news_container">
          <!--<h1 class="breaking_news_text">BREAKING NEWS</h1>
        </div>
        <div class="marquee_container" onmouseenter="toggle_animate_marquee()" onmouseleave="toggle_animate_marquee()">
        
        </div>
        <div class="scroll_ui_container">
          <div class="btn_start_and_stop_anim">
            <div class="button__icon" onmousedown="toggle_animate_marquee()">
              <i class="fas fa-pause"></i>
            </div>
          </div>    
        </div>
    </div>`
  })
  
  new Vue({ el: '#marquee_vue' })
}
