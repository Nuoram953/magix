let playerHand = null;
let templateHTML = null;
let cardInHand = [];
let currentCardUID = null;
let gData = null
let placeholder = null;
let attackCardWith = null;


let playACard = null;

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

      document.querySelector(".tour").textContent = String(data.mp);

      /**
       * Gestion des cartes et de leur apparence
       */
      if (data != "WAITING") {
        
        //Les cartes dans la main du joueur
        data.hand.forEach((card) => {

          if (( document.getElementById(card.uid)==null && document.getElementById(card.uid) == undefined ) && document.querySelector(".gup-cards").childElementCount <= 8) {
            addCardBoard(card, ".gup-cards");
          }
          card.cost <= data.mp ? document.getElementById(card.uid).style.border = "5px green solid" : document.getElementById(card.uid).style.border = "none";
        });

        //Les cartes sur le jeu cote joueur
        data.board.forEach((card) => {
          if (( document.getElementById(card.uid)==null && document.getElementById(card.uid) == undefined ) && document.querySelector(".game-cards-player").childElementCount <= 7){
            addCardBoard(card, ".game-cards-player");
          }
         
          card.mechanics.includes("Taunt") ? document.getElementById(card.uid).querySelector(".card-taunt").style.visibility = "visible": document.getElementById(card.uid).querySelector(".card-taunt").style.visibility = "hidden";
        });

        data.opponent.board.forEach((card) => {
          if (( document.getElementById(card.uid)==null && document.getElementById(card.uid) == undefined ) && document.querySelector(".game-cards-ennemy").childElementCount <= 7){
            addCardBoard(card, ".game-cards-ennemy");
          }
           card.mechanics.includes("Taunt") ? document.getElementById(card.uid).querySelector(".card-taunt").style.visibility = "visible": document.getElementById(card.uid).querySelector(".card-taunt").style.visibility = "hidden";
        })

    
        removeCard(data);
      }

      
      

      setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    });
};

window.addEventListener("load", () => {
  
  document.getElementById("endTurn").addEventListener("click",()=>{
    action(null,"END_TURN",null);
  });
  
  setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});



/**
 * Fonction onclick selon la carte (Sur le jeu, dans les mains du joueurs et sur le jeu de l'ennemi)
 */
const playCard = (evt) => {
  console.log(evt.id); // Retourne le uid de la carte
  action(evt.id,"PLAY",null);
};

const playCardBoard = (evt) => {
  attackCardWith = evt.id
  console.log(attackCardWith);
}

const attackCard = (evt) => {
  console.log(evt.id);
  action(attackCardWith,"ATTACK",evt.id);
}



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

  
  div.querySelector(".card-description").innerHTML = String(card.mechanics);
  div.querySelector(".card-attack").innerHTML = String(card.atk);
  div.querySelector(".card-health").innerHTML = String(card.hp);
  div.querySelector(".card-cost").innerHTML = String(card.cost);
  //TODO: change image depending on type of cards
  div.querySelector(".card-picture").style.backgroundImage =
    "url(assets/cards/zombie.jpg)";

 

  document.querySelector(position).appendChild(div);
}




const removeCard = newData =>{
  
  let children = document.querySelector(".game-cards-player").children;
  let arrayChildren = Array.from(children);

  let placeholder = Array.from(newData.board);
  

  arrayChildren.forEach(child =>{
    if(!placeholder.some(item => item.uid == child.id)){
      child.remove()
    }

  })

}


/**
 * Pour envoyer l'information sur l'action du joueur
 */
function action(uid,type,cible) {

  console.log(uid+"La carte jouer");
  console.log(type + "Action");
  console.log(cible + "La carte");

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
      if (typeof data !== "object") {
        if (data == "GAME_NOT_FOUND") {
            // Fin de la partie. Est-ce que j’ai gagné? Je dois appeler user-info
        }
      }
      else {
        // maVariable est un objet. On pourrait faire, par exemple, maVariable.game.hp ou 
        // maVariable.player.mp
       
      
        document.getElementById(uid).remove();
        
        
      }
        
    }
    else if (type =="ATTACK"){
     
      if (typeof data !== "object") {
        if (data == "GAME_NOT_FOUND") {
            // Fin de la partie. Est-ce que j’ai gagné? Je dois appeler user-info
        }
      }
      else {
        // maVariable est un objet. On pourrait faire, par exemple, maVariable.game.hp ou 
        // maVariable.player.mp
       
        
        
        
      }
      

    }

    
    
  })

  }


