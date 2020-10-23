<?php
require_once("action/CommonAction.php");

class LogoutAction extends CommonAction
{

    public function __construct()
    {
        parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
    }

    protected function executeAction()
    {

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
}
