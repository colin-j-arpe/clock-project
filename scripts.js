var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
var clock = document.getElementById("clock");
var screen = document.getElementsByTagName("body")[0];
var counter;

window.setInterval (updateClock, 2000);

function updateClock ()	{
	now = new Date();
	hour = now.getHours();
	minute = now.getMinutes();
	second = now.getSeconds();
	clock.innerText	= (hour + ":" + minute + ":" + second);
	reColour(hour, minute, second);
}

function reColour (r, g, b)	{
	var colourString = "rgb (" + r + "," + g + "," + b + ")"
	console.log(colourString);
	screen.style.backgroundColor = colourString;
}

// setTimeout (updateClock, 2000);

// function updateClock ()	{
// 	now = new Date();
// 	hour = now.getHours();
// 	minute = now.getMinutes();
// 	second = now.getSeconds();
// 	clock.innerText	= (hour + ":" + minute + ":" + second);
// 	window.setTimeout (updateClock, 1000);
// }