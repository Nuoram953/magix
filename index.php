<?php

require_once("action/IndexAction.php");

$action = new IndexAction();
$data = $action->execute();

//V7C0ouoK&
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Magix</title>
    <link rel="stylesheet" href="css/IndexStyle.css">
</head>

<body>

    <?php
    if (!$data["isValid"]) {
    ?>
        <div class="error-message">
            <strong>Error message!</strong>
        </div>
    <?php
    }
    ?>

    <form action="index.php" method="post">

        <div class="form-login">

            <input type="text" name="username" id="username" placeholder="Username">
            <input type="password" name="password" id="password" placeholder="Password">
            <button type="submit">Connection</button>

        </div>
    </form>

</body>

</html>