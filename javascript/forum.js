//getPosts:
//retrieve existing entries in grocerylist db table
//via grocerylist.php script and display to page
function getPosts(){
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

        //direct received data to appropreate html elements
        ajaxRequest.onreadystatechange = function() {

                //readyState = 4 indicates completed request
                if(ajaxRequest.readyState == 4) {

			//process and display results from database
                        var postDisplay = document.getElementById("postList");
			var display_string = ajaxRequest.responseText;
                        postDisplay.innerHTML = display_string;
			//ajaxDisplay.innerHTML = "testing :D";
                }
        }

        //call server script to query database
        ajaxRequest.open("GET", "../php/postlist.php", true);
        ajaxRequest.send(null);
}

//addPost
//bring up post creation interface
function addPost(){
	var interfaceDisplay = document.getElementById("container");
	var display_string = '<div class="interfacebackground"><form action="#" onsubmit="sendNewPost(this);">Name <input type="text" name="poster" required><br><br>Subject <input type="text" name="subject" required><br><br><textarea id="textinput" rows="10" cols="50" placeholder="text"></textarea><br><br><input type="submit" value="post" required><br></form></div>';
	interfaceDisplay.insertAdjacentHTML("beforeend", display_string);
	var button = document.getElementById("addnew");
	button.parentNode.removeChild(button);
}

//sendNewPost
//send new post to database
//form input is given as input to the function
function sendNewPost(form){
	var poster = form.elements[0];
	var subject = form.elements[1];
	var text = form.elements[2];
	document.getElementById("testdata").innerHTML = poster + subject + text;	
}