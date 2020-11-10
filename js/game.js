let playerHand = null;
let templateHTML = null;
let cardInHand = [];
let currentCardUID = null;
let gData = null
let placeholder = null;

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
            
            addCardBoard(card, data, ".gup-cards");
          
          }

          if (card.cost <= data.mp) {

            
            document.getElementById(card.uid).style.border = "5px green solid";

          }
          else{
            document.getElementById(card.uid).style.border = "none";
          }


        });

        //Les cartes sur le jeu cote joueur
        data.board.forEach((card) => {
          if (
            document.querySelector(".game-cards-player").childElementCount <= 7
          )
            addCardBoard(card, data, ".game-cards-player");
        });
      }

      setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    });
};

window.addEventListener("load", () => {
  setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});

const playCard = (evt) => {
  console.log(evt.id);
  gdata.hand.forEach(card => {
    if (card.id == evt.id){
      placeholder = card.uid
    }
  })

  console.log(placeholder);
  
};

function addCardBoard(card, data, position) {


  let div = document.createElement("div");
  div.innerHTML = templateHTML;
  div.className = "card"
  div.id = card.uid;

  switch (position) {
    case ".gup-cards":
      div.setAttribute("onclick", "playCard(this)");
      break;
    case ".gme-cards-player":
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
