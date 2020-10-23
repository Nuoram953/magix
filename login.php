<?php
    
    require_once("action/LoginAction.php");

    $action = new LoginAction();
    $data = $action->execute();

    //V7C0ouoK&


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Magix</title>
</head>
<body>

<form action="" method="post">
    
    <div class="form-login">
        <label for="username"> Username</label>
        <input type="text" name="username" id="username">

        <label for="password"> Password</label>
        <input type="text" name="password" id="password">

        <button type="submit">Connection</button>
    </div>

   


</form>
    
</body>
</html>
