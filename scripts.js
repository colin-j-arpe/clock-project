var now = new Date();
// var hour = now.getHours();
// var minute = now.getMinutes();
// var second = now.getSeconds();
var clock = document.getElementById("clock");
var screen = document.getElementById("page");
var message = document.getElementById("message");
var picture = document.getElementsByClassName("picture");
var counter;
var messageOpacity = 1
var pictureOpacity = 1

window.setInterval (updateClock, 1000);
var messageStarts = window.setInterval (checkSeconds, 10)
function checkSeconds ()	{
	now = new Date();
	if (now.getSeconds() === 1)	{
		window.setInterval (sendMessage, 60000);
		window.setInterval (changePic, 60000);
		window.clearInterval (messageStarts);
console.log("check stopped");
	}
}

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
	colour[0] = addZeroHex((timeScreen[0]*11));
	colour[1] = addZeroHex((timeScreen[1]*4));
	colour[2] = addZeroHex((timeScreen[2]*4));
	// for (var i = 0; i < timeScreen.length; i++) {
	// 	colour[i] = addZeroHex((timeScreen[i]*4));
	// }
	clock.style.backgroundColor = "#" + colour[0]+ colour[1]+ colour[2];
}

function reColourText (timeText)	{
	var	colour = [0,0,0];
	colour[0] = addZeroHex((255-(timeText[0]*11)));
	colour[1] = addZeroHex((255-(timeText[1]*4)));
	colour[2] = addZeroHex((255-(timeText[2]*4)));
	// for (var i = 0; i < colour.length; i++) { 
	// 	colour[i] = addZeroHex((255-(timeText[i]*4)));
	// }
	clock.style.color = "#" + colour[0]+ colour[1]+ colour[2];
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

var backPic = [
	"url('Images/0000.jpg')",
	"url('Images/0200.jpg')",
	"url('Images/0400.jpg')",
	"url('Images/0530.jpg')",
	"url('Images/0800.jpg')",
	"url('Images/1100.jpg')",
	"url('Images/1330.jpg')",
	"url('Images/1530.jpg')",
	"url('Images/1700.jpg')",
	"url('Images/1800.jpg')",
	"url('Images/1900.jpg')",
	"url('Images/2000.jpg')",
	"url('Images/2200.jpg')"];

function changePic ()	{
	now = new Date();
	if (now.getHours() === 0 && now.getMinutes() === 0) {
		newPic(0);
	}
	if (now.getHours() === 2 && now.getMinutes() === 0) {
		newPic(1);
	}
	if (now.getHours() === 4 && now.getMinutes() === 0) {
		newPic(2);
	}
	if (now.getHours() === 5 && now.getMinutes() === 30) {
		newPic(3);
	}
	if (now.getHours() === 8 && now.getMinutes() === 0) {
		newPic(4);
	}
	if (now.getHours() === 11 && now.getMinutes() === 0) {
		newPic(5);
	}
	if (now.getHours() === 13 && now.getMinutes() === 30) {
		newPic(6);
	}
	if (now.getHours() === 15 && now.getMinutes() === 30) {
		newPic(7);
	}
	if (now.getHours() === 17 && now.getMinutes() === 0) {
		newPic(8);
	}
	if (now.getHours() === 18 && now.getMinutes() === 0) {
		newPic(9);
	}
	if (now.getHours() === 19 && now.getMinutes() === 0) {
		newPic(10);
	}
	if (now.getHours() === 20 && now.getMinutes() === 0) {
		newPic(11);
	}
	if (now.getHours() === 22 && now.getMinutes() === 0) {
		newPic(12);
	}
}

function newPic (i)	{	
	picture[1].style.backgroundImage = backPic[i]
	pictureOpacity = 100;
	picture[0].style.opacity = 1.0;
	var stop = window.setInterval (fadePic, 3000);
	function fadePic ()	{
		if (pictureOpacity < 0)	{
			window.clearInterval (stop);
			picture[0].style.backgroundImage = backPic[i];
			picture[0].style.opacity = 1.0;
		}	else 	{
		picture[0].style.opacity = (pictureOpacity * 0.01);
		pictureOpacity--;
		}
	}
}

var eventText = [
	"Wake up",
	"Wake up the girls",
	"Get breakfast",
	"Get dressed and brush teeth",
	"Leave for school",
	"School starts",
	"Class begins",
	"Time for lunch",
	"Lunch is over",
	"School's out",
	"Throw something at Chris",
	"Dinner time",
	"Class is over",
	"Bath time",
	"Last call",
	"Teeth, Jamas, Potty",
	"Story time",
	"Lights out",
	"Quiet time",
	"Turn in homework",
	"Test message"];

function sendMessage ()	{
	now = new Date();
	if (now.getHours() === 6 && now.getMinutes() === 55) {
		sendText(0);
	}
	if (now.getHours() === 7 && now.getMinutes() === 00) {
		sendText(1);
	}
	if (now.getHours() === 7 && now.getMinutes() === 15) {
		sendText(2);
	}
	if (now.getHours() === 7 && now.getMinutes() === 40) {
		sendText(3);
	}
	if (now.getHours() === 7 && now.getMinutes() === 55) {
		sendText(4);
	}
	if (now.getHours() === 8 && now.getMinutes() === 15) {
		sendText(5);
	}
	if (now.getHours() === 10 && now.getMinutes() === 00) {
		sendText(6);
	}
	if (now.getHours() === 12 && now.getMinutes() === 30) {
		sendText(7);
	}
	if (now.getHours() === 13 && now.getMinutes() === 30) {
		sendText(8);
	}
	if (now.getHours() === 15 && now.getMinutes() === 30) {
		sendText(9);
	}
	if (now.getHours() === 16 && now.getMinutes() === 00) {
		sendText(10);
	}
	if (now.getHours() === 17 && now.getMinutes() === 30) {
		sendText(11);
	}
	if (now.getHours() === 18 && now.getMinutes() === 00) {
		sendText(12);
	}
	if (now.getHours() === 18 && now.getMinutes() === 30) {
		sendText(13);
	}
	if (now.getHours() === 18 && now.getMinutes() === 50) {
		sendText(14);
	}
	if (now.getHours() === 19 && now.getMinutes() === 00) {
		sendText(15);
	}
	if (now.getHours() === 19 && now.getMinutes() === 15) {
		sendText(16);
	}
	if (now.getHours() === 19 && now.getMinutes() === 30) {
		sendText(17);
	}
	if (now.getHours() === 19 && now.getMinutes() === 50) {
		sendText(18);
	}
	if (now.getHours() === 23 && now.getMinutes() === 50) {
		sendText(19)
	}
	if (now.getHours() === 23 && now.getMinutes() === 35) {
		console.log("test");
		sendText(20);
	}
}

function sendText (i)	{
	messageOpacity = 100;
	message.style.opacity = 1.0;
	message.innerText = eventText[i];
	var stop = window.setInterval (fadeMessage, 1200);

	function fadeMessage ()	{
		if (messageOpacity < 0)	{
			window.clearInterval (stop);
		}	else 	{
		message.style.opacity = (messageOpacity * 0.01);
		messageOpacity--;
		}
	}
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