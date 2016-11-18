# clock-project

There are two functions which run at certain pre-set times throughout the day.

(1) A message will appear at the bottom of the screen announcing an event scheduled to occur at that time (e.g., "Wake up the girls", "Class starts", "Dinner time", etc.).  The message then fades away for two minutes.

If you don't feel like waiting around, you can trigger one in the console by calling the function:
	sendText(x)
There are 20 messages, so pass 0-19 for x.

(2)	The rest of the screen will be filled with a background image appropriate to the time of day (e.g., sunrise, starry sky, etc.).  When a new image is called, it will cross-fade in for five minutes.

However, there is no default image when the page loads, so if you want to see this one in action, call:
	changePic(x)
There are 13 pictures.  The first time you call the function, it will fade in from black.

Also, once you call the function, you have to wait until the initial fade completes before you can call it again to see a cross-fade.  To speed up the fade, lower the value in line 138 of the JavaScript file.

Finally, I recommend pressing F11 in your browser for the full-screen experience.	
