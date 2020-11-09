

let playerHand=null;
let templateHTML = null;
let cardInHand = [];


const state = () => {
  fetch("ajax.php", {
    // Il faut créer cette page et son contrôleur appelle
    method: "POST", // l’API (games/state)
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // contient les cartes/état du jeu.

      templateHTML = document.querySelector("#player-card-template").innerHTML +="";

      document.querySelector(".tour").textContent = String(data.mp);

      //Gestion des cartes
      let cards = data.hand;

      if (data != "WAITING"){

        cards.forEach(card => {

          if (!cardInHand.includes(card.id) && document.querySelector(".gup-cards").childElementCount <= 5 ){
            cardInHand.push(card.id);
            let div = document.createElement("div");
            div.innerHTML = templateHTML;
            div.className = "card";
            div.id = card.id;
            div.setAttribute("onclick","card(this)");
            
         
            
            div.querySelector(".card-description").innerHTML = String(card.mechanics) + ": Destroy all minions";
            div.querySelector(".card-attack").innerHTML = String(card.atk);
            div.querySelector(".card-health").innerHTML = String(card.hp);
            div.querySelector(".card-cost").innerHTML = String(card.cost);
            

            
            document.querySelector(".gup-cards").appendChild(div);
    
            
            
          }
  

        })
      }
      
      setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    });
};

window.addEventListener("load", () => {
 
  setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});


const card = evt => {
  console.log(evt.id);
}




