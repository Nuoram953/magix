<?php

require_once("action/IndexAction.php");

$action = new IndexAction();
$data = $action->execute();

$titlePage = "Minecraft Magix - Login";

require_once("partials/header.php");
?>


<body class="login">

    <div class="login-container">
        <img src="assets/Minecraft.png" alt="Minecraft Magix Title" id="login-title">
        <div class="login-info">
            <form action=" index.php" method="post">
                
                <div class="error-message" style="display: <?= !$data["isValid"] ? "block" : "none" ?>"">
                    <strong>Error message!</strong>
                </div>
                <input type=" text" name="username" id="username" placeholder="Username">
                <input type="password" name="password" id="password" placeholder="Password">
                <div class="button">
                    <button type="submit">Connection</button>
                </div>
                
            </form>
        </div>
    </div>









   
</body>

</html>