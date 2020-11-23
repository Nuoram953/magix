<?php

require_once("action/DAO/connection.php");
require_once("action/CommonAction.php");

class ActionDB extends CommonAction
{

    public function __construct()
    {
        parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
    }

    protected function executeAction()
    {

        if($_POST["player2"]!= null){ // Dans le cas ou que nous sommes pas capable de se connecter a une game pvp
            $connection = Connection::getConnection();
            $statement = $connection->prepare("INSERT INTO player VALUES (?,?,default,?)");
            $statement->bindParam(1,$_POST["player1"]);
            $statement->bindParam(2,$_POST["player2"]);
            $statement->bindParam(3,$_POST["gagnant"]);
            $statement->execute();
        }

      
        
   
       
    }
}
