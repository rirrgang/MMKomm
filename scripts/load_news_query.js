function load_news_from_checkboxes(){

    var settings = null;
    var max_articles_count = 3
    try {
        settings = JSON.parse(localStorage.getItem("settings"));    
        console.log(settings);
    } catch (error) {
        console.log("ERROR in load_news_query.js at function load_news_from_checkboxes: line 6 (JSON Parse Error)");
        settings = null;
    }

    if(settings != null && settings != ''){
        max_articles_count = parseInt(settings.max_articles_count);
    }
    

    var searched_entries = [];
    try {
        searched_entries = JSON.parse(localStorage.getItem("checkboxes"));
    } catch (error) {
        console.log("ERROR in load_news_query.js at function load_news_from_checkboxes: line 21 (JSON Parse Error)");
        searched_entries = []
    }

    
    var articles = [];
    
    if(searched_entries != null){
        if(searched_entries.length != 0){
            for (let i = 0; i < searched_entries.length; i++) {
                var entryJSON = check_for_cached_news_JSON(searched_entries[i]);
                if(entryJSON != null){
                    if(entryJSON.totalResults != 0){
                        if(entryJSON.articles.length < max_articles_count){
                            article_count = entryJSON.articles.length;
                        }else{
                            article_count = max_articles_count;
                        }
                        for(let j = 0; j < /*entryJSON.articles.length*/article_count; j++){
                            articles.push({article: entryJSON.articles[j], keyword: searched_entries[i]});
                        }
    
    
                        //entryJSON.articles.forEach(article => {articles.push({article: article, keyword: searched_entries[i]}); })
                    }
                }
                
            }

            console.log("article_count: "+article_count);
    
            console.log("Articles");
            console.log(articles);
    
            var shuffeled_articles = shuffle(articles);
    
            add_array_to_news_boxes(shuffeled_articles);
    
            console.log(shuffeled_articles);
    
            add_to_breaking_news_array(shuffeled_articles);
            animate_Marquee();
        }
    }
    

    
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function check_for_cached_news_JSON(query_name){
    var tag = "nn";
    var query_JSON = load_cached_JSON(query_name, tag);
    if(query_JSON == null){
        console.log("LOAD NN FROM API");
        query_JSON = load_news_query(query_name);
    }else{
        console.log("LOADED NN FROM LOCALSTORAGE");
    }
    return JSON.parse(query_JSON);
}

function load_news_query(query_name){
    var api_key = 'c635c99cceb048cc885954ba8d4a32ab'
    //var api_key = '8a858fc2295b42f1a4dd93236dd0554c';
    var url = 'https://newsapi.org/v2/everything?' +
              'language=' + language + '&' +          
              'q=' + query_name + '&' +          
              'apiKey=' + api_key + '';

    var tag="nn";              
    var query_JSON = null;

    $.ajax({
        url: url, 
        type: 'get',
        async: false,
        success: function( data ) {
            console.log(data);
            console.log( "Load was performed." );
            query_JSON = data;
        }
    });
    cache_JSON_String(query_name, JSON.stringify(query_JSON), tag);
    return JSON.stringify(query_JSON);
}