<?php

require_once("action/ChatAction.php");

$action = new ChatAction();
$data = $action->execute();

$titlePage = "Minecraft Magix - Chat";

require_once("partials/header.php");

?>


</head>


<body>
    <div class="chat-container">
        <div class="chat-button">
            <form action="" method="post" id="form-button">
                <button class="button" type="submit" value="begin" name="begin">Jouer</button>
                <button class="button" type="submit" value="practice" name="practice">Pratique</button>
                <button class="button" type="submit" value="history" name="history">History</button>
                <button class="button" type="submit" value="Signout" name="signout">Quitter</button>
            </form>
        </div>

        <?php
        if (isset($data["isValid"])) {

        ?>

            <div class="error-message" style=visibility:visible>
                <strong><?= $data["isValid"] ?></strong>
            </div>
        <?php
        }
        ?>



        <iframe id="chat-box" style="width:700px;height:240px;" onload="applyStyles(this)" src=<?= "https://magix.apps-de-cours.com/server/#/chat/" . $_SESSION["key"]  ?>></iframe>

        <div class=chat-username>Utilisateur:  <?= $_SESSION["username"] ?></div>

    </div>







</body>

</html>