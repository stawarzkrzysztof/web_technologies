const countdown = () => {
	var current = new Date();

	const pope_hour = 21;
	const pope_minute = 37;
	const pope_seconds = 0;

	const seconds = pope_seconds + pope_minute * 60 + pope_hour * 3600;

	const doba = 24 * 3600;

	var current_hour = current.getHours();
	var current_minute = current.getMinutes();
	var current_second = current.getSeconds();

	var current_s = current_second + current_minute * 60 + current_hour * 3600;

	if (current_s > seconds) {
		current_s -= doba;
	}

	var roznica = seconds - current_s;

	var missing_hour = Math.floor(roznica / 3600);
	if (missing_hour < 10) {
		missing_hour = "0" + missing_hour.toString();
	}

	var missing_minute = Math.floor((roznica - missing_hour * 3600) / 60);

	if (missing_minute < 10) {
		missing_minute = "0" + missing_minute.toString();
	}

	var missing_second = roznica - missing_hour * 3600 - missing_minute * 60;
	if (missing_second < 10) {
		missing_second = "0" + missing_second.toString();
	}

	document.querySelector("#hours").innerText = missing_hour;
	document.querySelector("#minutes").innerText = missing_minute;
	document.querySelector("#seconds").innerText = missing_second;
};

setInterval(countdown, 1000);
