function check_for_cached_breakingNews_JSON(category){
    var tag = "bn";
    var query_JSON = load_cached_JSON(category, tag);
    if(query_JSON == null){
        console.log("LOAD BN FROM API");
        query_JSON = load_breakingNews_query(category);
    }else{
        console.log("LOADED BN FROM LOCALSTORAGE");
    }
    return JSON.parse(query_JSON);
}

function load_breakingNews_query(category){
    var api_key = 'c635c99cceb048cc885954ba8d4a32ab'
    //var api_key = '8a858fc2295b42f1a4dd93236dd0554c';
    var url = 'https://newsapi.org/v2/top-headlines?' +
              'category=' + category + '&' +
              'country=' + country + '&' +          
              'apiKey=' + api_key + '';

    var tag="bn";              
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
    cache_JSON_String(category, JSON.stringify(query_JSON), tag);
    return JSON.stringify(query_JSON);
}