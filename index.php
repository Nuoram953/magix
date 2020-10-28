<?php

require_once("action/IndexAction.php");

$action = new IndexAction();
$data = $action->execute();

require_once("partials/header.php");
?>


<body>
    <div class="title">
        <img src="assets/Minecraft.png" alt="Minecraft Magix Title" id="login-title">

        <form action=" index.php" method="post">
            <div class="form-login">
                <div class="error-message" style="display: <?= !$data["isValid"] ? "block" : "none" ?>"">
                    <strong>Error message!</strong>
                </div>
                <input type=" text" name="username" id="username" placeholder="Username">
                    <input type="password" name="password" id="password" placeholder="Password">
                    <div class="button">
                        <button type="submit">Connection</button>
                    </div>
                </div>
        </form>
    </div>
</body>

</html>