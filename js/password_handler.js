alert("Psst, hasło to: 123 !");

function showOrHidePassword() {
	var password_input = document.getElementById("password_input");
	var hide1 = document.getElementById("hide1");
	var hide2 = document.getElementById("hide2");

	if (password_input.type === "password") {
		password_input.type = "text";
		hide1.style.display = "block";
		hide2.style.display = "none";
	} else {
		password_input.type = "password";
		hide1.style.display = "none";
		hide2.style.display = "block";
	}
}

function passwordChecker() {
	var password = "123";
	var response = document.getElementById("password_input").value;

	if (response == "") {
		document.getElementById("message").innerHTML =
			"Podane hasło jest puste.";
		return false;
	} else if (response != password) {
		document.getElementById("message").innerHTML =
			"Podane hasło jest niepoprawne.";
		return false;
	} else {
		alert("Hasło poprawne! Zapraszamy...");
		document.getElementById("message").innerHTML =
			"Podane hasło jest poprawne!";
		window.open("html/main_page.html", "_blank");
		return false;
	}
}
