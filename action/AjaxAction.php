<?php
    require_once("action/CommonAction.php");

    class AjaxAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
        
            $data = [];
            $data["key"] = $_SESSION["key"];

            $result = parent::callAPI("games/state", $data);

            if ($result == "INVALID_KEY") {
                header("location:chat.php");

            } else {
                // Pour voir les informations retournées : var_dump($result);exit;
                
                
            }
            

        

            return compact("result");
        }
    }