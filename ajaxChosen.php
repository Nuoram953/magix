<?php
    require_once("action/AjaxChosenAction.php");

    $action = new AjaxChosenAction();
    $data = $action->execute();

    echo json_encode($data["result"]);


