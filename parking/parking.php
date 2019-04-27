<?php
        session_start();

        //redirect to mainpage if session variable "isAuthenticated is not set
        if(empty($_SESSION['isAuthenticated'])) {
                header('Location: http://erick-sieben.com');
        }
?>

<!DOCTYPE html>
<html>

<head>
        <link rel="stylesheet" type="text/css" href="../style/stylesheet_parking.css">
        <title>House Website</title>
</head>

<body onload="ajaxFunction()">
        <div class="page">
        <div class="banner">
                <h1>The House Website</h1>
        </div>

        <div class="container">

                <div class="nav_bar">
                        <a href="../home/home.php" class="nav_link">Home</a>
                        <a href="../parking/parking.php" class="nav_link_active">Parking</a>
                        <a href="../calendar/calendar.php" class="nav_link">Calendar</a>
                        <a href="../grocerylist/grocerylist.php" class="nav_link">Grocery List</a>
                        <a href="../forum/forum.php" class="nav_link">Forum</a>
                        <div class="nav_fill"></div>
                </div>

                <div class="content">

                        <div class="parking_garage">
                                <p class="title">Garage</p>
                                <div class="cars" id="garage_cars">
                                <!--
                                        <div class="parking_occupied"></div>
                                        <div class="parking_occupied"></div>
                                -->
                                </div>
                        </div>
                        <div class="parking_driveway">
                                <p class="title">Driveway</p>
                                <div class="cars" id="driveway_cars">
                                <!--
                                        <div class="parking_vacant"></div>
                                        <div class="parking_occupied"></div>
                                -->
                                </div>
                        <div>

                <!--    <p id="parkingData"></p>        -->
                </div>
        <p id="test">testing :D</p>
        </div>
        </div>
</body>

<script type="text/javascript" src="../javascript/parking.js"></script>
</html>
