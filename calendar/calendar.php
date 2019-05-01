<?php
        session_start();

        //redirect to mainpage if session variable "isAuthenticated is not set
        if(!isset($_SESSION['isAuthenticated'])) {
                header('Location: http://erick-sieben.com');
                exit();
        }
?>

<!DOCTYPE html>
<html>

<head>
        <link rel="stylesheet" type="text/css" href="../style/stylesheet.css">
        <title>House Website</title>
</head>

<body>
        <div class="page">
        <div class="banner">
                <h1>The House Website</h1>
        </div>

        <div class="container">

                <div class="nav_bar">
                        <a href="../home/home.php" class="nav_link">Home</a>
                        <a href="../parking/parking.php" class="nav_link">Parking</a>
                        <a href="../calendar/calendar.php" class="nav_link_active">Calendar</a>
                        <a href="../grocerylist/grocerylist.php" class="nav_link">Grocery List</a>
                        <a href="../forum/forum.php" class="nav_link">Forum</a>
                        <div class="nav_fill"></div>
                </div>

                <div class="content">
                        <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp; src=mceeq2me93oaq554mc019g57pftga4fc%40import.calendar.google.com&amp;color=%23333333&amp;src=nhl_6_Edmonton%2BOilers%23sports%40group.v.calendar.google.com&amp;color=%238D6F47&amp;src=en.canadian%23holiday%40group.v.calendar.google.com&amp;color=%2329527A&amp;src=skopovcrnebcec6kt9n7jqufns%40group.calendar.google.com&amp;color=%235229A3&amp;ctz=America%2FEdmonton" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
                </div>
        </div>
        </div>
</body>

</html>
