<?php

require_once("action/CommonAction.php");

class IndexAction extends CommonAction
{

    public function __construct()
    {
        parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
    }

    protected function executeAction()
    {
        
        $isValid = true;

        if (isset($_POST["username"]) and isset($_POST["password"])) {

            $data = [];
            $data["username"] = $_POST["username"];
            $data["password"] = $_POST["password"];

            $result = parent::callAPI("signin", $data);

            if ($result == "INVALID_USERNAME_PASSWORD") {
                $isValid = false;

            } else {
                // Pour voir les informations retournées : var_dump($result);exit;
                $_SESSION["key"] = $result->key;
                header("location:chat.php");
            }
        }

        return compact("isValid");
    }
}
