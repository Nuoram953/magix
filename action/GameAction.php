<?php
require_once("action/CommonAction.php");

class GameAction extends CommonAction
{

    public function __construct()
    {
        parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
    }

    protected function executeAction()
    {
        $result = [];

        if (isset($_POST["abandon"])) {

            header("location:chat.php");
        } else if (isset($_POST["endTurn"])) {
            $data = [];
            $data["key"] = $_SESSION["key"];
            $data["type"] = "END_TURN";

            $result = parent::callAPI("games/action", $data);

            if ($result == "INVALID_KEY") {
                header("location:chat.php");
            } else {
                // Pour voir les informations retournées : var_dump($result);exit;
            }
        }

        return compact(["result"]);
    }
}
