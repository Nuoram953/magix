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
                header("location:login.php");
            }
    
            return [];
        }
   
        return [];
    }
}
