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
                        var garageDisplay = document.getElementById("garage_cars");
                        var drivewayDisplay = document.getElementById("driveway_cars");

                        //process received data to display on the page:
                        //data is received as an array of length 4 as follows
                        //______________________________________________________
                        //|             GARAGE                                  |
                        //|     _________________       _________________       |
                        //|     |South Space    |       |North Space    |       |
                        //|     |Index 0        |       |Index 1        |       |
                        //|     |_______________|       |_______________|       |
                        //|_____________________________________________________|
                        //|             DRIVEWAY                                |
                        //|     _________________       _________________       |
                        //|     |South Space    |       |North Space    |       |
                        //|     |Index 2        |       |Index 3        |       |
                        //|     |_______________|       |_______________|       |
                        //|_____________________________________________________|

                        var result_array = ajaxRequest.responseText.split(" ");
                        var garage_string = '';
                        var driveway_string = '';
                        var i;
                        for(i=0;i<2;i++) {
                                if(Number(result_array[i]) == 1) {
                                        garage_string += '<div class = "parking_occupied" onclick="updateParking(';
                                } else {
                                        garage_string += '<div class = "parking_vacant" onclick="updateParking(';
                                }
                                garage_string += i;
                                garage_string += ')"></div>';
                        }
                        for(i=2;i<4;i++) {
                                if(Number(result_array[i]) == 1) {
                                        driveway_string += '<div class = "parking_occupied" onclick="updateParking(';
                                } else {
                                        driveway_string += '<div class = "parking_vacant" onclick="updateParking(';
                                }
                                driveway_string += i.toString(2);
                                driveway_string += ')"></div>';
                        }
                        garageDisplay.innerHTML = garage_string;
                        drivewayDisplay.innerHTML = driveway_string;
                }
        }

        //call server script to query database
        ajaxRequest.open("GET", "../php/parking-query.php", true);
        ajaxRequest.send(null);
}

//Browser Support Code
function updateParking(index){
        var updateRequest;

        try {
                //Opera, Firefox Safari
                updateRequest = new XMLHttpRequest();
        } catch (e) {

                //Internet Explorer
                try {
                        updateRequest = new ActiveXObject("Msxml2.XMLHTTP");
                } catch (e) {

                        try {
                                updateRequest = new ActiveXObject("Microsoft.XMLHTTP");
                        } catch (e) {

                                //Something went wrong
                                alert("Unable to support browser");
                                return false;
                        }
                }
        }

        //direct received data to appropriate html elements
        updateRequest.onreadystatechange = function() {

                //readyState = 4 indicates completed request
                if(updateRequest.readyState == 4) {

                        document.getElementById("test").innerHTML = index;

                        //send index to update to PHP script
                        var result_array = updateRequest.responseText;
                        document.getElementById("test").innerHTML = result_array;
                        //reload page
                        location.reload();
                }
                }

        }
        var fileString = "../php/parking-update.php?index=";
        fileString += index;
        updateRequest.open("GET",fileString, true);
        updateRequest.send(null);
}

