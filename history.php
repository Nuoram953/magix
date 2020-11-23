<?php
	require_once("action/HistoryAction.php");

	$action = new HistoryAction();
	$data = $action->execute();

	require_once("partials/header.php");
?>

	<?php

        for ($i=0;$i<count($data["data"]);$i++){
            echo $data["data"]["test".$i];
        }

    ?>

<?php
	require_once("partials/footer.php");
