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
            <div class="ui-cards-ennemy">1</div>
            <div class="ui-frame-ennemy">
                <div class="player-frame">
                    <div class="frame-health">1</div>
                </div>
                <div class="frame-portrait" id="portrait"></div>
                <div class="player-frame">
                    <div class="frame-cost">1</div>
                </div>
            </div>
            <div class="player-frame">
                <div class="ui-remaining-ennemy">3</div>
            </div>
        </div>

        <div class="game-board">
            <div class="game-cards-ennemy"></div>
            <div class="game-cards-player"></div>
            <div class="error-message"></div>
            <div class="state-game"></div>
        </div>

        <div class="game-ui-player">


            <div class="gup-numbers">
                <div class="player-frame">
                    <div class="health">30</div>
                </div>
                <div class="player-frame">
                    <div class="tour">1</div>
                </div>
                <div class="player-frame">
                    <div class="cards-remaining">24</div>
                </div>                
            </div>
            <div class="gup-cards">
                <template id="player-card-template">
                    
                        <div class="card-header">
                            <div class="card-cost">10</div>
                            <div class="card-taunt"></div>
                        </div>
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
                
                    <button class="button"  id="heropower" value="heropower" name="heropower">Hero Power</button>
                    <button class="button" id="endTurn" value="endturn" name="endturn">End turn</button>
                    <form action="" method="post">
                        <button class="button" id="abandon" value="abandon" name="abandon">Abandon</button>
                    </form>
                   
                    <div class="tour-time-remaining"></div>
                
            </div>


        </div>

    </div>



</body>

</html>