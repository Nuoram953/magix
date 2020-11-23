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

            }
            else if ($result == "LAST_GAME_WON" || $result == "LAST_GAME_LOST"){

            }

            return compact("result");

            
        }
    }