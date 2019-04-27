<?php
        session_start();

        //redirect to mainpage if session variable "isAuthenticated is not set
        if(!$_SESSION['isAuthenticated']) {
                header('Location: http://erick-sieben.com');
        }
?>


<!DOCTYPE html>
<html>

<head>
        <link rel="stylesheet" type="text/css" href="../style/stylesheet_grocery.css">
        <title>House Website</title>
</head>

<body onload="getList()">
        <div class="page">
        <div class="banner">
                <h1>The House Website</h1>
        </div>

        <div class="container">

                <div class="nav_bar">
                        <a href="../home/home.php" class="nav_link">Home</a>
                        <a href="../parking/parking.php" class="nav_link">Parking</a>
                        <a href="../calendar/calendar.php" class="nav_link">Calendar</a>
                        <a href="../grocerylist/grocerylist.php" class="nav_link_active">Grocery List</a>
                        <a href="../forum/forum.php" class="nav_link">Forum</a>
                        <div class="nav_fill"></div>
                </div>

                <div class="content">
                        <div class="add_button">
                                <div class="input_holder">
                                        <h2>Add an item</h2>
                                        <form id="add_item">
                                                <input type="text" id="field" maxlength="60">
                                        </form>
                                </div>
                                <div class="submit_add" onclick="addItem()"><h2>+</h2></div>
                                </div>
                        <div id="groceryList"></div>
                </div>
        </div>
        </div>
<p id="test"></p>
</body>
<script type="text/javascript" src="../javascript/grocerylist.js"></script>
</html>
