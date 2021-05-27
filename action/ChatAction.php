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
        $isValid = null;

        if(isset($_POST["signout"])){
            $data = [];
            $data["key"] = $_SESSION["key"];
            $result = parent::callAPI("signout", $data);
            if ($result == "INVALID_KEY") {
                $isValid = $result;
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
            else if($result == "JOINED_TRAINING") {
                header("location:game.php");
            }
            else{
                $isValid = $result;
            }

        }
        else if (isset($_POST["begin"])){
            $data = [];
            $data["key"] = $_SESSION["key"];
            $data["type"] = "PVP";
            $result = parent::callAPI("games/auto-match", $data);
            if ($result == "INVALID_KEY") {
                header("location:index.php");
            }
            else if($result == "JOINED_TRAINING" || $result == "CREATED_PVP" || $result == "JOINED_PVP") {
                header("location:game.php");
            }else{
                $isValid = $result;
            }

        }
        else if(isset($_POST["history"])){
            header("location:history.php");
        }
   
        return compact("isValid");
    }
}
