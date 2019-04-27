//getList:
//retrieve existing entries in grocerylist db table
//via grocerylist.php script and display to page
function getList(){
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
                        var ajaxDisplay = document.getElementById("groceryList");

                        //insert text returned from php script
                        ajaxDisplay.innerHTML = ajaxRequest.responseText;
                }
        }

        //call server script to query database
        ajaxRequest.open("GET", "../php/grocerylist.php", true);
        ajaxRequest.send(null);
}

//clrItem:
//remove selected item from the database
//item index is passed to function from input
function clrItem(index){
        var clearRequest;

        try {
                //Opera, Firefox Safari
                clearRequest = new XMLHttpRequest();
        } catch (e) {

                //Internet Explorer
                try {
                        clearRequest = new ActiveXObject("Msxml2.XMLHTTP");
                } catch (e) {

                        try {
                                clearRequest = new ActiveXObject("Microsoft.XMLHTTP");
                        } catch (e) {

                                //Something went wrong
                                alert("Unable to support browser");
                                return false;
                        }
                }
        }

        //direct received data to appropreate html elements
        clearRequest.onreadystatechange = function() {

                //readyState = 4 indicates completed request
                if(clearRequest.readyState == 4) {
                        var confirm = clearRequest.responseText;
                        location.reload();
                        document.getElementById("test").innerHTML = "testing :D";
                }
        }

        //call server script to query database
        var fileString = "../php/grocerylist-update.php?data=" + index + "&op=clr";
        clearRequest.open("GET", fileString, true);
        clearRequest.send(null);
}

//addItem
//add inputted item to the database
//item name text from input field is passed to function
function addItem(){
        var addRequest;

        try {
                //Opera, Firefox Safari
                addRequest = new XMLHttpRequest();
        } catch (e) {

                //Internet Explorer
                try {
                        addRequest = new ActiveXObject("Msxml2.XMLHTTP");
                } catch (e) {

                        try {
                                addRequest = new ActiveXObject("Microsoft.XMLHTTP");
                        } catch (e) {

                                //Something went wrong
                                alert("Unable to support browser");
                                return false;
                        }
                }
        }

        //direct received data to appropreate html elements
        addRequest.onreadystatechange = function() {

                //readyState = 4 indicates completed request
                if(addRequest.readyState == 4) {
                        var confirm = addRequest.responseText;
                        location.reload();
                        document.getElementById("test").innerHTML = "testing :D";
                }
        }

        //call server script to query database
        var item = document.getElementById("add_item").elements[0].value;
        var fileString = "../php/grocerylist-update.php?data=" + item + "&op=add";
        addRequest.open("GET", fileString, true);
        addRequest.send(null);
}
