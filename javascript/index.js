document.getElementById("goBtn").onclick = function () {
	var input = document.getElementById("password").elements[0].value;
	if (input == "siebenhome"){
		location.href = "home/home.html";
	}
	else {
		location.href = "#";
	}
}