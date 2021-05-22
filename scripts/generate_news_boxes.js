function generate_news_boxes(){
    var news_boxes = document.getElementById("news-boxes");

    //Add default holdingcontainers
    for (var i = 0; i < 3; i++) {
        var holdingcontainer = document.createElement("DIV");
        holdingcontainer.classList.add("holdingcontainer");
        holdingcontainer.id = "h_container" + i;
        news_boxes.appendChild(holdingcontainer);

        //add default articles
        for (var j = 0; j < 3; j++) {
            var internalcontainer = document.createElement("DIV");
            internalcontainer.classList.add("internalcontainerW");
            holdingcontainer.appendChild(internalcontainer);    

            //add article keyword
            var article_keyword = document.createElement("p");
            article_keyword.innerHTML = "Article Keyword Placeholder";
            article_keyword.classList.add("article_keyword");
            internalcontainer.appendChild(article_keyword);


            //add default article title
            var article_title = document.createElement("H1");
            article_title.classList.add("article_title")
            article_title.innerHTML = "Article Title Placeholder"
            internalcontainer.appendChild(article_title);

            //add default article image
            var article_img = document.createElement("IMG");
            article_img.classList.add("article_img");
            article_img.src = "test_img.jpg";
            internalcontainer.appendChild(article_img);

            //add default article text
            var article_text = document.createElement("P");
            article_text.classList.add("article_text");
            article_text.innerHTML = "Article Text Placeholder";
            internalcontainer.appendChild(article_text);

            //add default articl link
            var article_link = document.createElement("A");
            article_link.classList.add("article_link");
            article_link.href = "#";
            article_link.innerHTML = "Article Link Placeholder";
            internalcontainer.appendChild(article_link);
            
        }

    }

}

function add_new_article_container(holdingcontainer, article_count){
        var internalcontainer = document.createElement("DIV");
            internalcontainer.classList.add("internalcontainerW");
            internalcontainer.id = "internaltcontainer"+article_count;
            holdingcontainer.appendChild(internalcontainer);    

            //add article keyword
            var article_keyword = document.createElement("p");
            article_keyword.innerHTML = "Article Keyword Placeholder";
            article_keyword.classList.add("article_keyword");
            article_keyword.id = "article_keyword"+article_count;
            internalcontainer.appendChild(article_keyword);


            //add default article title
            var article_title = document.createElement("H1");
            article_title.classList.add("article_title")
            article_title.id = "article_title"+article_count;
            article_title.innerHTML = "Article Title Placeholder"
            internalcontainer.appendChild(article_title);

            //add default article image
            var article_img = document.createElement("IMG");
            article_img.classList.add("article_img");
            article_img.id = "article_img"+article_count;
            article_img.src = "test_img.jpg";
            internalcontainer.appendChild(article_img);

            //add default article text
            var article_text = document.createElement("P");
            article_text.classList.add("article_text");
            article_text.innerHTML = "Article Text Placeholder";
            internalcontainer.appendChild(article_text);

            //add default articl link
            var article_link = document.createElement("A");
            article_link.classList.add("article_link");
            article_link.href = "#";
            article_link.innerHTML = "Article Link Placeholder";
            internalcontainer.appendChild(article_link);
}


var article_count = 0;
var article_rows = 0;
function add_to_news_boxes(article){

    var news_boxes = document.getElementById("news-boxes");

    if(article_count % 3 == 0){
        //generate new row
        article_rows++;

        var holdingcontainer = document.createElement("DIV");
        holdingcontainer.classList.add("holdingcontainer");
        holdingcontainer.id = "h_container" + article_rows;
        news_boxes.appendChild(holdingcontainer);

        
    }else{
        var holdingcontainer = document.getElementById(h_container + article_rows);
    }

    //generate new article container to row
    article_count++;
    add_new_article_container(holdingcontainer, article_count);



    

}