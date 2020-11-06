window.addEventListener("load", () => {

  state();
})



const state = () => {
  fetch("ajax.php", {
    // Il faut créer cette page et son contrôleur appelle
    method: "POST", // l’API (games/state)
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // contient les cartes/état du jeu.

      let playerHand = document.document.querySelector(".gup-cards").innerHTML += "";
      let templateHTML = document.querySelector("#game-template").innerHTML;

      document.querySelector(".tour").textContent = String(data.mp);

      //Gestion des cartes
      data.hand.forEach(card => {

        let div = document.createElement("div");
        div.innerHTML = templateHTML;
        div.className = "card"
  
        div.querySelector("#card-description").innerHTML = String(card.mechanics) + ": Destroy all minions";
        div.querySelector("#card-attack").innerHTML = String(card.atk);
        div.querySelector("#card-health").innerHTML = String(card.hp);
        div.querySelector("#card-cost").innerHTML = String(card.cost);

        playerHand.appendChild(div);
      })

     




      setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
    });
};

window.addEventListener("load", () => {
  setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});
