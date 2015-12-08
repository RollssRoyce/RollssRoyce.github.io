var colorButton = document.getElementById ("color-button").onclick = changeColor;

function changeColor () {
	var red = document.getElementById('red').value;
	var green = document.getElementById('green').value;
	var blue = document.getElementById('blue').value;


var rgbStr = 'rgb(' + red + ',' + green + ',' + blue + ')';

red.innerHTML = red;
green.innerHTML = green;
blue.innerHTML = blue;

console.log(rgbStr);

document.body.style.backgroundColor = rgbStr;



}