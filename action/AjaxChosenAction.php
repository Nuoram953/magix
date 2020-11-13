<?php
require_once("action/CommonAction.php");

class AjaxChosenAction extends CommonAction
{

    public function __construct()
    {
        parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
    }

    protected function executeAction()
    {



        $data = [];
        $data["key"] = $_SESSION["key"];
        $data["type"] = $_POST["type"];


        if ($data["type"] == "END_TURN"){

        }
        else if ($data["type"] == "PLAY"){
            $data["uid"] = $_POST["uid"];

        }
        else if ($data["type"] == "ATTACK"){
            $data["uid"] = $_POST["uid"];
            $data["targetuid"] = $_POST["targetuid"];

        }

        $result = parent::callAPI("games/action", $data);
        if ($result == "INVALID_KEY") {
            header("location:chat.php");
        } else {
            // Pour voir les informations retournées : var_dump($result);exit;
        }


        return compact("result");
    }
}
