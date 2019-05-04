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
			var result_array = ajaxRequest.responseText.split("&$%");
                        var display_string = '';
			var i=0;
			while(i<result_array.length - 1) {
				display_string += '<div class="forumpost"><div class="postsubject"><h3>';
				display_string += result_array[i+1];
				display_string += '</h3></div><div class="postinfo"><p>';
				display_string += result_array[i];
				display_string += '</p><p>';
				display_string += result_array[i+2];
				display_string += '</p></div></div>';
				i=i+3;				
			}
                        postDisplay.innerHTML = display_string;
			//ajaxDisplay.innerHTML = "testing :D";
                }
        }

        //call server script to query database
        ajaxRequest.open("GET", "../php/postlist.php", true);
        ajaxRequest.send(null);
}