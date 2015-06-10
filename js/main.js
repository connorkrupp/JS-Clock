$(document).ready(function() {
	function displayTime() {
		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();

		var isAM = true;
		
		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		if (hours > 11) {
			isAM = false;
		}
		if (hours > 12) {
			hours = hours - 12;
		}

		var clockDiv = document.getElementById("time");
		var timeToDisplay = hours + ":" + minutes + ":" + seconds;

		if (isAM == true) {
			timeToDisplay += " AM";
		} else {
			timeToDisplay += " PM";
		}

		clockDiv.innerHTML = timeToDisplay;
	}

	displayTime();
	setInterval(displayTime, 1000);

})