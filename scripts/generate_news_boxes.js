Vue.component('news_boxes_vue', {
    template: `
        <div class='holdingcontainer'>
            <div class ='internalcontainerW'>
                <p class='article_keyword'>Article Keyword Placeholder</p>
                <h1 class='article_title'>Article Title Placeholder</h1>
                <img class='article_img' src='test_img.jpg'></img>
                <p class='article_text'>Article Text Placeholder</p>
                <div class='article_link_container'>
                    <div class='article_link_button'>
                        <a class='article_link' id='' href='#'>Read More<a/>
                    </div>
                </div>
            </div>

            <div class ='internalcontainerW'>
                <p class='article_keyword'>Article Keyword Placeholder</p>
                <h1 class='article_title'>Article Title Placeholder</h1>
                <img class='article_img' src='test_img.jpg'></img>
                <p class='article_text'>Article Text Placeholder</p>
                <div class='article_link_container'>
                    <div class='article_link_button'>
                        <a class='article_link' id='' href='#'>Read More<a/>
                    </div>
                </div>
            </div>

            <div class ='internalcontainerW'>
                <p class='article_keyword'>Article Keyword Placeholder</p>
                <h1 class='article_title'>Article Title Placeholder</h1>
                <img class='article_img' src='test_img.jpg'></img>
                <p class='article_text'>Article Text Placeholder</p>
                <div class='article_link_container'>
                    <div class='article_link_button'>
                        <a class='article_link' id='' href='#'>Read More<a/>
                    </div>
                </div>
            </div>
        </div>
    `

});

new Vue({
    //el: '#news_boxes_vue'
});


Vue.component('article_container', {
    template: `
        <div class="internalcontainerW">
            <p class="article_keyword">Article Keyword Placeholder</p>
            <h1 class="article_title">Article Title Placeholder</h1>
            <img class="article_img"></img>
            <p class="article_text">Article Text Placeholder</p>
            <a class="article_link" href="#" >Read More</a>
        </div>
    `
});


function add_new_article_container(holdingcontainer, article_count) {

    var internalcontainer = document.createElement("DIV");
    internalcontainer.classList.add("internalcontainer");
    internalcontainer.id = "internaltcontainer" + article_count;
    holdingcontainer.appendChild(internalcontainer);

    //add article keyword
    var article_keyword = document.createElement("p");
    article_keyword.innerHTML = "Article Keyword Placeholder";
    article_keyword.classList.add("article_keyword");
    article_keyword.id = "article_keyword" + article_count;
    internalcontainer.appendChild(article_keyword);


    //add default article title
    var article_title = document.createElement("H1");
    article_title.classList.add("article_title")
    article_title.id = "article_title" + article_count;
    article_title.innerHTML = "Article Title Placeholder"
    internalcontainer.appendChild(article_title);

    //add default article image
    var article_img = document.createElement("IMG");
    article_img.classList.add("article_img");
    article_img.id = "article_img" + article_count;
    article_img.src = "test_img.jpg";
    internalcontainer.appendChild(article_img);

    //add default article text
    var article_text = document.createElement("P");
    article_text.classList.add("article_text");
    article_text.id = "article_text" + article_count;
    article_text.innerHTML = "Article Text Placeholder";
    internalcontainer.appendChild(article_text);

    //add article link container
    var article_link_container = document.createElement("DIV");
    article_link_container.classList.add("article_link_container")
    internalcontainer.appendChild(article_link_container);

    //add article link button
    var article_link_button = document.createElement("DIV");
    article_link_button.classList.add("article_link_button")
    article_link_container.appendChild(article_link_button);
    article_link_button.addEventListener("click", function(){
        article_link.click();
    });

    //add default articl link
    var article_link = document.createElement("A");
    article_link.classList.add("article_link");
    article_link.id = "article_link" + article_count;
    article_link.href = "#";
    article_link.innerHTML = "Read More";
    article_link.target = "_blank";
    article_link_button.appendChild(article_link);
}

function update_article_infos(article, article_count, keyword) {
    var article_keyword = document.getElementById("article_keyword" + article_count);
    var article_title = document.getElementById("article_title" + article_count);
    var article_img = document.getElementById("article_img" + article_count);
    var article_text = document.getElementById("article_text" + article_count);
    var article_link = document.getElementById("article_link" + article_count);

    if (article) {
        if (keyword) {
            article_keyword.innerHTML = keyword;
        }
        if (article.title) {
            article_title.innerHTML = article.title;
        }
        if (article.urlToImage) {
            article_img.src = article.urlToImage;
        }
        if (article.content) {
            var content = article.content;
            content = content.replace(/\[\+.*\]/, ""); //to remove [+ xyz chars] in String;
            article_text.innerHTML = content;
        }
        if (article.url) {
            article_link.href = article.url;
        } else {
            article_link.innerHTML = "";
        }
    }
}





var article_counter = 0;
var article_rows = 0;


function add_to_news_boxes(article, keyword) {

    var news_boxes = document.getElementById("news_boxes_vue");

    if (article_counter % 3 == 0) {
        //generate new row
        article_rows++;

        

        var holdingcontainer = document.createElement("DIV");
        holdingcontainer.classList.add("holdingcontainer");
        holdingcontainer.id = "holdingcontainer" + article_rows;
        news_boxes.appendChild(holdingcontainer);


    } else {
        var holdingcontainer = document.getElementById("holdingcontainer" + article_rows);
    }

    //generate new article container to row
    article_counter++;
    add_new_article_container(holdingcontainer, article_counter);
    update_article_infos(article, article_counter, keyword);

}

function add_array_to_news_boxes(news_array) {
    // var max_articles_num = 3;
    // var count;
    // if(news_array.length >= max_articles_num){
    //     count = max_articles_num;
    // }else{
    //     count = news_array.length;
    // }


    for (var i = 0; i < news_array.length; i++) {
        add_to_news_boxes(news_array[i].article, news_array[i].keyword)
    }

}