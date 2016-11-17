var now = new Date();
// var hour = now.getHours();
// var minute = now.getMinutes();
// var second = now.getSeconds();
var clock = document.getElementById("clock");
var screen = document.getElementById("page");
var counter;

window.setInterval (updateClock, 1000);

function updateClock ()	{
	now = new Date();
	var time = [now.getHours(), now.getMinutes(), now.getSeconds()];
	// hour = now.getHours();
	// minute = now.getMinutes();
	// second = now.getSeconds();
	for (var i = 0; i < time.length; i++) {
		time[i] = addZeroDec(time[i]);
	}
	clock.innerText	= (time[0] + ":" + time[1] + ":" + time[2]);
	reColourScreen(time);
	reColourText(time);
}

function reColourScreen (timeScreen)	{
	var	colour = [0,0,0];
	for (var i = 0; i < timeScreen.length; i++) {
		colour[i] = addZeroHex((timeScreen[i]*4));
	}
	screen.style.backgroundColor = "#" + colour[0]+ colour[1]+ colour[2];
}

function reColourText (timeText)	{
	var	colour = [0,0,0];
	for (var i = 0; i < colour.length; i++) { 
		colour[i] = addZeroHex((255-(timeText[i]*4)));
	}
	screen.style.color = "#" + colour[0]+ colour[1]+ colour[2];
}

function addZeroDec (num)	{
	if (num < 10)	{
		num = "0" + num;
	}
	return num;
}

function addZeroHex (num)	{
	num = num.toString(16)
	if (num.length < 2) {
		num = "0" + num;
	}
	return num;
}

// function reColour (r, g, b)	{
// 	var colourString = "rgb (" + (r*4) + "," + (g*4) + "," + (b*4) + ");";
// 	console.log(colourString);
// 	screen.style.backgroundColor = "colourString";
// }

// setTimeout (updateClock, 2000);

// function updateClock ()	{
// 	now = new Date();
// 	hour = now.getHours();
// 	minute = now.getMinutes();
// 	second = now.getSeconds();
// 	clock.innerText	= (hour + ":" + minute + ":" + second);
// 	window.setTimeout (updateClock, 1000);
// }