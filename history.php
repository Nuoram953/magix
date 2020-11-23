<?php
	require_once("action/HistoryAction.php");

	$action = new HistoryAction();
	$data = $action->execute();

	require_once("partials/header.php");
?>


    <div class="all-matches">
  

	<?php

        for ($i=0;$i<count($data["data"]);$i++){
            
            if ($data["data"]["test".$i]){
                ?>
            <div class="match">
                <span class="match history"><?= $data["data"]["test".$i]["player1"] ?></span>
                <span class="match history"><?= $data["data"]["test".$i]["player2"] ?></span>
                <span class="match history"><?= $data["data"]["test".$i]["date_match"] ?></span>
                <span class="match history"><?= $data["data"]["test".$i]["gagnant"] ?></span>
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
