var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
var clock = document.getElementById("clock");

window.setInterval (updateClock, 1000);

function updateClock ()	{
	clock.innerText	= (hour + ":" + minute + ":" + second);
}