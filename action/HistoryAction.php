<?php
    
    require_once("action/DAO/Connection.php");
    require_once("action/CommonAction.php");
    
        class HistoryAction extends CommonAction {
    
            public function __construct() {
                parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
            }
    
            protected function executeAction() {

                $data = [];
                $count = 0;

                $connection = Connection::getConnection();
                $statement = $connection->prepare("SELECT * FROM player");

                $statement->setFetchMode(PDO::FETCH_ASSOC);
                $statement->execute();
                
                
                $data["test0"] = "Test0";
                $data["test1"] = "Test1";
                $data["test2"] = "Test2";

                $count++;
                

                
                
                return compact("data");
            }
        }