function darkenColor(rgb, percentage){
	var numbers = rgb.replace(/[^\d,-]/g, "");
	if(rgb == ""){
		numbers = "255,255,255";
	}
	var r = parseInt(numbers.substr(0, numbers.indexOf(",")));
	var g = parseInt(numbers.substr(numbers.indexOf(",")+1, numbers.indexOf(",")));
	var b = parseInt(numbers.substr(numbers.indexOf(",")+1+numbers.indexOf(",")+1));
	return "rgb(" + Math.floor(r-(r/100*percentage)) + ", " +  Math.floor(g-(g/100*percentage)) + ", " + Math.floor(b-(b/100*percentage)) + ")";
}