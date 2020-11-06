<?php

require_once("action/GameAction.php");

$action = new GameAction();
$data = $action->execute();

$titlePage = "Minecraft Magix - Game";

require_once("partials/header.php");
?>

<script src="js/game.js"></script>
</head>


<body>

    <div class="UI">

        <div class="game-ui-ennemy"></div>

        <div class="game-board"></div>

        <div class="game-ui-player">

            <div class="gup-all">
                <div class="gup-numbers">
                    <div id="health">30</div>
                    <div id="tour">1</div>
                    <div id="cards-remaining">24</div>
                </div>
                <div class="gup-cards"></div>
                <div class="gup-button">
                    <form action="" method="post">
                        <button class="button" type="submit" value="heropower" name="heropower">Hero Power</button>
                        <button class="button" type="submit" value="endturn" name="endturn">End turn</button>
                        <button class="button" type="submit" value="abandon" name="abandon">Abandon</button>
                        <span id="tour-time-remaining"></span>
                    </form>
                </div>
            </div>

        </div>
    </div>



</body>

</html>