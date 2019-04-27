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

                        //send password input to server, php script will authenticate
                        //echo "1" for accepted, "0" otherwise
                        var response = ajaxRequest.responseText;

                        if(response == "1") {
                                window.location.href = "home/home.php";
                        }
                        if(response == "0") {
                                window.location.href = "#";
                        }
                }
                document.getElementById("test").innerHTML = response;
        }

        //send input to server and call server script to authenticate
        var input = document.getElementById("password").elements[0].value;
        var inputString = "?input=" + input;
        ajaxRequest.open("GET", "php/authenticate.php" + inputString, true);
        ajaxRequest.send(null);
}
