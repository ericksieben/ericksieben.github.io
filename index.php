<?php
        //start session
        session_start();
?>

<!DOCTYPE html>
<html>

<head>
        <link rel="stylesheet" type="text/css" href="style/stylesheet.css">
        <title>House Website</title>
</head>

<body>
        <div class="main">

                <div class="holder">
                        <form id="password">
                                <h2>Password: <h2><input type="password" name="fpwd" id="field">
                        </form>
                        <br><br>
                        <div class="button" id="goBtn" onclick="ajaxFunction()">
                                <h1>Welcome Home</h1>
                        </div>
                </div>

        </div>
<p id="test"></p>
</body>
<script type="text/javascript" src="javascript/index.js"></script>
</html>
