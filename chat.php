<?php

require_once("action/ChatAction.php");

$action = new ChatAction();
$data = $action->execute();

$titlePage = "Minecraft Magix - Chat";

require_once("partials/header.php");

?>





<body>


    <form action="" method="post">
        <input type="submit" value="Signout" name="signout">
    </form>

    <iframe style="width:700px;height:240px;" onload="applyStyles(this)" src=<?= "https://magix.apps-de-cours.com/server/#/chat/" . $_SESSION["key"] ?>></iframe>





</body>

</html>