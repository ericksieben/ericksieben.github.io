document.getElementById("goBtn").onclick = function () {
	var input = document.getElementById("password").elements[0].value;
	if (input == "siebenhome"){
		location.href = "house_home.html";
	}
	else {
		location.href = "#";
	}
}