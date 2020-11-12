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
        } 
        

        return compact(["result"]);
    }
}
