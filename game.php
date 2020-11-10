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
        <div class="game-ui-ennemy">

        </div>

        <div class="game-board">
            <div class="game-cards-ennemy"></div>
            <div class="game-cards-player"></div>
        </div>

        <div class="game-ui-player">


            <div class="gup-numbers">
                <div class="health">
                    <span>30</span>
                </div>
                <div class="tour">1</div>
                <div class="cards-remaining">24</div>
            </div>
            <div class="gup-cards">
                <template id="player-card-template">
                    
                        <span class="card-cost">10</span>
                        <div class="card-picture"></div>
                        <div class="card-info">
                            <span class="card-title"></span>
                            <span class="card-description"></span>
                        </div>
                        <div class="card-stats">
                            <div class="card-attack"></div>
                            <div class="card-health"></div>
                        </div>
                    


                </template>
            </div>
            <div class="gup-button">
                <form action="" method="post">
                    <button class="button" value="heropower" name="heropower">Hero Power</button>
                    <button class="button" value="endturn" name="endturn">End turn</button>
                    <button class="button" value="abandon" name="abandon">Abandon</button>
                    <span id="tour-time-remaining"></span>
                </form>
            </div>


        </div>

    </div>



</body>

</html>