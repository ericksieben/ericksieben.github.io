//document.getElementById("goBtn").onclick = function () {
//	var input = document.getElementById("password").elements[0].value;
//	if (input == "siebenhome"){
//		location.href = "home/home.html";
//	}
//	else {
//		location.href = "#";
//	}
//}

//Browser Support Code
function ajaxFunction(){
	var ajaxRequest;
	
	try {
		//Opera, Firefox Safari
		ajaxRequest = new XMLHttpRequest();
	} catch (e) {
		
		//Internet Explorer
		try {
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			
			try {
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {

				//Something went wrong
				alert("Unable to support browser");
				return false;
			}
		}
	}
		
	//direct received data to appropriate html elements
	ajaxRequest.onreadystatechange = function() {

		//readyState = 4 indicates completed request
		if(ajaxRequest.readyState == 4) {
			if(ajaxRequest.responseText == "1") {
				location.href = "home/home.html";
			}
			else {
				location.href = "#";
			}
		}
	}

	//call server script to authenticate
	var input = document.getElementById("password").elements[0].value;
	ajaxRequest.open("GET", "../php/authenticate.php" + input, true);
	ajaxRequest.send(null);
}