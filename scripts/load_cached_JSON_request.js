function load_cached_JSON(query_name, tag){
    var cached_JSON = localStorage.getItem(query_name + "[" + tag + "]");
    if(cached_JSON != null){
        return JSON.parse(cached_JSON);
    }else{
        console.log("Could not load cached JSON for query= '"+query_name+"' with the tag='"+tag+"'");
        return null;
    }
}