//Function for "gradient"-colors
function darkenColor(rgb, percentage){

	//var rgb = "rgb(0, 168, 103)"
  
	  var numbers = rgb.replace(/[^\d,-]/g, "");
	  if(rgb == ""){
		  numbers = "255,255,255";
	  }
	  var r = parseInt(numbers.substr(0, numbers.indexOf(",")));
	var r_len = numbers.substr(0, numbers.indexOf(",")).length;
	numbers = numbers.substr(r_len+1);
	  var g = parseInt(numbers.substr(0, numbers.indexOf(",")));
	var g_len = numbers.substr(0, numbers.indexOf(",")).length;
	numbers = numbers.substr(g_len+1);
	  var b = numbers;
	  return "rgb(" + Math.floor(r-(r/100*percentage)) + ", " +  Math.floor(g-(g/100*percentage)) + ", " + Math.floor(b-(b/100*percentage)) + ")";
  }