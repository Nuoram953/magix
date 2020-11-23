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
                $statement = $connection->prepare("SELECT * FROM player ORDER BY date_match DESC");

                $statement->setFetchMode(PDO::FETCH_ASSOC);
                $statement->execute();
                
                
                while ($count != 10){
                    
                    $data["test".$count] = $statement->fetch();



                    $count++;
                }

                

                
                
                return compact("data");
            }
        }