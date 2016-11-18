var now = new Date();
// var hour = now.getHours();
// var minute = now.getMinutes();
// var second = now.getSeconds();
var clock = document.getElementById("clock");
var screen = document.getElementById("page");
var message = document.getElementById("message");
var counter;
var messageOpacity = 1

window.setInterval (updateClock, 1000);
var messageStarts = window.setInterval (checkSeconds, 10)
function checkSeconds ()	{
	now = new Date();
	if (now.getSeconds() === 1)	{
		window.setInterval (sendMessage, 60000);
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
	for (var i = 0; i < timeScreen.length; i++) {
		colour[i] = addZeroHex((timeScreen[i]*4));
	}
	clock.style.backgroundColor = "#" + colour[0]+ colour[1]+ colour[2];
}

function reColourText (timeText)	{
	var	colour = [0,0,0];
	for (var i = 0; i < colour.length; i++) { 
		colour[i] = addZeroHex((255-(timeText[i]*4)));
	}
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

function sendMessage ()	{
	now = new Date();
	if (now.getHours() === 6 && now.getMinutes() === 55) {
		sendText(0);
	}
	if (now.getHours() === 7 && now.getMinutes() === 00) {
		sendWakeGirls();
	}
	if (now.getHours() === 7 && now.getMinutes() === 15) {
		sendBreakfast();
	}
	if (now.getHours() === 7 && now.getMinutes() === 40) {
		sendBrushTeeth();
	}
	if (now.getHours() === 7 && now.getMinutes() === 55) {
		sendLeaveHouse();
	}
	if (now.getHours() === 8 && now.getMinutes() === 15) {
		sendSchoolStarts();
	}
	if (now.getHours() === 10 && now.getMinutes() === 00) {
		sendClassStarts();
	}
	if (now.getHours() === 12 && now.getMinutes() === 30) {
		sendLunchStarts();
	}
	if (now.getHours() === 13 && now.getMinutes() === 30) {
		sendLunchEnds();
	}
	if (now.getHours() === 15 && now.getMinutes() === 30) {
		sendSchoolEnds();
	}
	if (now.getHours() === 17 && now.getMinutes() === 30) {
		sendDinner();
	}
	if (now.getHours() === 18 && now.getMinutes() === 00) {
		sendClassEnds();
	}
	if (now.getHours() === 18 && now.getMinutes() === 30) {
		sendBathTime();
	}
	if (now.getHours() === 18 && now.getMinutes() === 50) {
		sendLastCall();
	}
	if (now.getHours() === 19 && now.getMinutes() === 00) {
		sendTeethJamasPotty();
	}
	if (now.getHours() === 19 && now.getMinutes() === 15) {
		sendStoryTime();
	}
	if (now.getHours() === 19 && now.getMinutes() === 30) {
		sendChatTime();
	}
	if (now.getHours() === 19 && now.getMinutes() === 50) {
		sendQuietTime();
	}
	if (now.getHours() === 23 && now.getMinutes() === 50) {
		sendHomeworkDue();
	}
	if (now.getHours() === 22 && now.getMinutes() === 41) {
		console.log("test");
		sendTestEvent();
	}
}

function sendTestEvent ()	{
	messageOpacity = 100;
	message.style.opacity = 1.0;
	message.innerText = "Test Event";
	var stop = window.setInterval (fadeMessage, 1200);
	if (messageOpacity < 0)	{
		window.clearInterval (stop);
	}
}

function fadeMessage ()	{
	message.style.opacity = (messageOpacity * 0.01);
	messageOpacity--;
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