
//TODO:UI
//TODO:UI de l'ennemi
//TODO:Fin de la partie


let playerHand = null;
let templateHTML = null;
let cardInHand = [];
let currentCardUID = null;
let gData = null
let placeholder = null;
let attackCardWith = null;
let playACard = null;

let dictError = {
  "INVALID_ACTION":"L'action est invalide",
  "ACTION_IS_NOT_AN_OBJECT": "L'action n'est pas un objet",
  "NOT_ENOUGH_ENERGY":"Vous n'avez pas assez d'energie pour jouer cette carte",
  "BOARD_IS_FULL":"Pas assez de place pour la carte",
  "CARD_NOT_IN_HAND":"La carte n’est pas dans votre main",
  "CARD_IS_SLEEPING":"Carte ne peut être jouée ce tour-ci",
  "MUST_ATTACK_TAUNT_FIRST":"Une carte taunt empêche ce coup",
  "OPPONENT_CARD_NOT_FOUND":"La carte attaquée n’est pas présente sur le jeu",
  "CARD_NOT_FOUND":"La carte cherchée (uid) n’est pas présente",
  "ERROR_PROCESSING_ACTION":"Erreur interne, ne devrait pas se produire",
  "INTERNAL_ACTION_ERROR":"Autre erreur interne, ne devrait pas se produire",
  "HERO_POWER_ALREADY_USED":"Pouvoir déjà utilisé pour ce tour"
};

let dictState = {
  "WAITING":"EN ATTENTE D'UN ADVERSAIRE",
  "LAST_GAME_WON": "BRAVO, VOUS AVEZ GAGNÉ LA PARTIE",
  "LAST_GAME_LOST": "MEILLEURE CHANCE LA PROCHAINE FOIS!"
}

let dictStateColor = {
  "WAITING":"white",
  "LAST_GAME_WON": "green",
  "LAST_GAME_LOST": "red"
}




const state = () => {

  fetch("ajax.php", {
    // Il faut créer cette page et son contrôleur appelle
    method: "POST", // l’API (games/state)
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // contient les cartes/état du jeu.

      gdata = data

      templateHTML = document.querySelector(
        "#player-card-template"
      ).innerHTML += "";

      /**
       * Gestion des cartes et de leur apparence
       */
      if (data != "WAITING" && data != "LAST_GAME_LOST" && data != "LAST_GAME_WON") {

        document.querySelector(".state-game").style.visibility = "hidden";
        
        
        //Les cartes dans la main du joueur
        data.hand.forEach((card) => {

          if (( document.getElementById(card.uid)==null && document.getElementById(card.uid) == undefined ) && document.querySelector(".gup-cards").childElementCount <= 8) {
            addCardBoard(card, ".gup-cards");
          }
          card.cost <= data.mp && data.yourTurn ? document.getElementById(card.uid).style.border = "5px green solid" : document.getElementById(card.uid).style.border = "none";
        });

        //Les cartes sur le jeu cote joueur
        data.board.forEach((card) => {
          if (( document.getElementById(card.uid)==null && document.getElementById(card.uid) == undefined ) && document.querySelector(".game-cards-player").childElementCount <= 7){
            addCardBoard(card, ".game-cards-player");
          }

          updateCard(card);
         
          card.state != "SLEEP" && data.yourTurn ? document.getElementById(card.uid).style.border = "5px yellow solid" : document.getElementById(card.uid).style.border = "none";
          card.mechanics.includes("Taunt") ? document.getElementById(card.uid).querySelector(".card-taunt").style.visibility = "visible": document.getElementById(card.uid).querySelector(".card-taunt").style.visibility = "hidden";
        });

        data.opponent.board.forEach((card) => {
          if (( document.getElementById(card.uid)==null && document.getElementById(card.uid) == undefined ) && document.querySelector(".game-cards-ennemy").childElementCount <= 7){
            addCardBoard(card, ".game-cards-ennemy");
          }

          updateCard(card);
          card.mechanics.includes("Taunt") ? document.getElementById(card.uid).querySelector(".card-taunt").style.visibility = "visible": document.getElementById(card.uid).querySelector(".card-taunt").style.visibility = "hidden";
        })

        removeCard(data);

        document.querySelector(".health").innerHTML = data.hp;
        document.querySelector(".tour").innerHTML = data.mp;
        document.querySelector(".cards-remaining").innerHTML = data.remainingCardsCount;
        document.querySelector(".tour-time-remaining").innerHTML = data.remainingTurnTime;
        document.querySelector(".frame-health").innerHTML = data.opponent.hp;
        document.querySelector(".frame-cost").innerHTML = data.opponent.mp;


      }else{
        document.querySelector(".state-game").style.visibility = "visible";
        document.querySelector(".state-game").style.color = dictStateColor[data];
        document.querySelector(".state-game").innerHTML = dictState[data];
      }

      setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    });
};

window.addEventListener("load", () => {
  
  document.getElementById("endTurn").addEventListener("click",()=>{
    action(null,"END_TURN",null);
  });

  document.querySelector(".frame-portrait").addEventListener("click",()=>{
    action(attackCardWith,"ATTACK",0);
  })
  
  setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});


/**
 * Fonction onclick selon la carte (Sur le jeu, dans les mains du joueurs et sur le jeu de l'ennemi)
 */
const playCard = (evt) => action(evt.id,"PLAY",null);
const playCardBoard = (evt) => attackCardWith = evt.id;
const attackCard = (evt) =>  action(attackCardWith,"ATTACK",evt.id);
  
function addCardBoard(card, position) {

  let div = document.createElement("div");
  div.innerHTML = templateHTML;
  div.className = "card"
  div.id = card.uid;

  switch (position) {
    case ".gup-cards":
      div.setAttribute("onclick", "playCard(this)");
      break;
    case ".game-cards-player":
      div.setAttribute("onclick", "playCardBoard(this)");
      break;
    case ".game-cards-ennemy":
      div.setAttribute("onclick", "attackCard(this)");
      break;
  }

  div.querySelector(".card-description").innerHTML = card.mechanics;
  div.querySelector(".card-attack").innerHTML = card.atk;
  div.querySelector(".card-health").innerHTML = card.hp;
  div.querySelector(".card-cost").innerHTML = card.cost;
  div.querySelector(".card-picture").style.backgroundImage = "url(assets/cards/zombie.jpg)";

  document.querySelector(position).appendChild(div);
}

const updateCard = card => {
  let temp = document.getElementById(card.uid);
  temp.querySelector(".card-health").innerHTML = String(card.hp);
  temp.querySelector(".card-attack").innerHTML = String(card.atk);
}


const removeCard = newData =>{
  
  let childrenPlayer = document.querySelector(".game-cards-player").children;
  let arrayChildren = Array.from(childrenPlayer);
  let placeholder = Array.from(newData.board);

  arrayChildren.forEach(child =>{
    if(!placeholder.some(item => item.uid == child.id)){
      child.remove()
    }

  })

  let childEnnemy = document.querySelector(".game-cards-ennemy").children;
  let arrayChildrenEnnemy = Array.from(childEnnemy);
  let placeholderEnnemy = Array.from(newData.opponent.board);

  arrayChildrenEnnemy.forEach(child =>{
    if(!placeholderEnnemy.some(item => item.uid == child.id)){
      child.remove()
    }

  })
}

const errorMessage = data => {

  document.querySelector(".error-message").style.visibility = "visible";
  document.querySelector(".error-message").innerHTML = dictError[data];

  setTimeout(()=>{
    document.querySelector(".error-message").style.visibility = "hidden";
  },3000)
}

/**
 * Pour envoyer l'information sur l'action du joueur
 */
function action(uid,type,cible) {

  let formData = new FormData();
  formData.append("uid",uid);
  formData.append("type",type);
  formData.append("targetuid",cible);

  fetch("ajaxChosen.php", {
    method: "POST",
    credentials: "include",
    body: formData
    
  })
  .then(response => response.json())
  .then(data => {

    if (type == "PLAY"){
      typeof data !== "object" ? errorMessage(data) : document.getElementById(uid).remove(); 
    }
    else if(type == "ATTACK" || type == "END_TURN"){
      if(typeof data !== "object"){
        errorMessage(data)
      }

    }
  })

  }


