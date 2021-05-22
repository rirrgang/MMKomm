//Nach x-beliebigen Zeit neue Request laden, da sonst veraltete (gecachte) NEWS geladen werden!!!

function cache_JSON_String(query_name, data, tag){
    if(data != null && query_name != null && tag != null){
        localStorage.setItem(query_name+"[" + tag + "]", JSON.stringify(data));
    }else{
        alert("Could not cache JSON[" + data + "] named: '" + query_name + "'")
    }  
}