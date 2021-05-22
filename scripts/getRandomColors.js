//Function to generate random colors for breaking news entries
var colors = ['rgb(0, 163, 108)', 'rgb(63, 0, 255)', 'rgb(31, 81, 255)', 'rgb(210, 125, 45)', 'rgb(128, 0, 0)', 'rgb(0, 255, 255)', 'rgb(255, 191, 0)', 'rgb(159, 43, 104)', 'rgb(218, 112, 214)'];

function getRandomColor(){

    if(colors.length == 0){
        colors.push('rgb(0, 163, 108)', 'rgb(63, 0, 255)', 'rgb(31, 81, 255)', 'rgb(210, 125, 45)', 'rgb(128, 0, 0)', 'rgb(0, 255, 255)', 'rgb(255, 191, 0)', 'rgb(159, 43, 104)', 'rgb(218, 112, 214)');
    }

    var x = Math.floor(Math.random() * colors.length);
    var random_color = colors[x]
    colors.splice(x, 1)

    return "linear-gradient(to top, " + random_color + ", "+ darkenColor(random_color, 50) + " )" ;
}
