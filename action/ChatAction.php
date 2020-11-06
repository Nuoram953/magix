<?php


require_once("action/CommonAction.php");

class ChatAction extends CommonAction
{

    public function __construct()
    {
        parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
    }

    protected function executeAction()
    {

        if(isset($_POST["signout"])){
            $data = [];
            $data["key"] = $_SESSION["key"];
            $result = parent::callAPI("signout", $data);
            if ($result == "INVALID_KEY") {
                // err
            } else {
                session_destroy();
                header("location:index.php");
            }
    
        
        }
        else if (isset($_POST["practice"])){
            $data = [];
            $data["key"] = $_SESSION["key"];
            $data["type"] = "TRAINING";
            $result = parent::callAPI("games/auto-match", $data);
            if ($result == "INVALID_KEY") {
                header("location:index.php");
            }
            else if ($result == "INVALID_GAME_TYPE"){

            }
            else if ($result == "DECK_INCOMPLETE"){

            }
            else if ($result == "DECK_INCOMPLETE"){

            }
            else {
                header("location:game.php");
            }

        }
   
        return [];
    }
}
