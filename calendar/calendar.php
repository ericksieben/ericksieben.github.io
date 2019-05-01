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
                        
                </div>
        </div>
        </div>
</body>

</html>
