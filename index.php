<?php

require_once("action/IndexAction.php");

$action = new IndexAction();
$data = $action->execute();

$titlePage = "Minecraft Magix - Login";

require_once("partials/header.php");
?>

</head>
<body class="login">
    <div class="animation" height="200" width="1920"></div>

    <div class="error-message" style="visibility: <?= !$data["isValid"] && isset($data["isValid"]) ? "visible" : "hidden" ?>"">
        <strong>Votre identifiant ou votre mot de passe est erroné</strong>
        

    </div>
        
    
    <div class="login-container">
        <img src="assets/Minecraft.png" alt="Minecraft Magix Title" id="login-title">
        <div class="login-info">
            <form action=" index.php" method="post">
                
                
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