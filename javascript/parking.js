//current state test code
//adapted from https://www.tutorialspoint.com/ajax/ajax_database.htm
//accessed Feb 7, 2019

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
			var ajaxDisplay = document.getElementById("parkingData");
			ajaxDisplay.innerHTML = ajaxRequest.responseText;
		}
	}

	//call server script to query database
	ajaxRequest.open("GET", "../php/test.php", true);
	ajaxRequest.send(null);
}