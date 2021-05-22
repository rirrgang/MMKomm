function check_for_cached_news_JSON(query_name){
    var tag = "nn";
    var query_JSON = load_cached_JSON(query_name, tag);
    if(query_JSON == null){
        alert("LOAD FROM API");
        query_JSON = load_news_query(query_name);
    }else{
        alert("LOADED FROM LOCALSTORAGE");
    }
    return JSON.parse(query_JSON);
}

function load_news_query(query_name){
    var api_key = 'c635c99cceb048cc885954ba8d4a32ab'
    var url = 'https://newsapi.org/v2/everything?' +
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
            alert( "Load was performed." );
            query_JSON = data;
        }
    });
    cache_JSON_String(query_name, JSON.stringify(query_JSON), tag);
    return JSON.stringify(query_JSON);
}