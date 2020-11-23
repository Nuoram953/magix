<?php
	require_once("action/HistoryAction.php");

	$action = new HistoryAction();
	$data = $action->execute();

	require_once("partials/header.php");
?>


    <div class="all-matches">

             <div>
                <span>Joueur</span>
                <span>Adversaire</span>
                <span>Date</span>
                <span>Gagnant</span>
            </div>
  

	<?php

        for ($i=0;$i<count($data["data"]);$i++){
            
            if ($data["data"]["test".$i]){
                ?>
            <div>
                <span><?= $data["data"]["test".$i]["player1"] ?></span>
                <span><?= $data["data"]["test".$i]["player2"] ?></span>
                <span><?= $data["data"]["test".$i]["date_match"] ?></span>
                <span><?= $data["data"]["test".$i]["gagnant"] ?></span>
            </div>

        <?php
            }
            ?>
            
        <?php    
        }

    ?>

    </div>

<?php
	require_once("partials/footer.php");
