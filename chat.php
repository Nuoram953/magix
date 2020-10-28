<?php

require_once("action/ChatAction.php");

$action = new ChatAction();
$data = $action->execute();

?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>test</title>
</head>

<body>


    <form action="" method="post">
        <input type="submit" value="Signout" name="signout">
    </form>

    <iframe style="width:700px;height:240px;" onload="applyStyles(this)" src=<?= "https://magix.apps-de-cours.com/server/#/chat/" . $_SESSION["key"] ?>></iframe>





</body>

</html>