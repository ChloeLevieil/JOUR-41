// Sélectionne l'élément du footer
var footer = document.querySelector("footer");

// Ajoute un écouteur d'événements "click" au footer
footer.addEventListener("click", function() {
  // Fonction à exécuter lorsque l'utilisateur clique sur le footer
  console.log("clique");
});

// Crée une variable de compteur et initialise sa valeur à 0
//var compteur = 0;
// Exemple d'utilisation du compteur
//compteur++; // Incrémente le compteur de 1
//console.log(compteur); // Affiche la valeur du compteur dans la console

// Crée une variable de compteur et initialise sa valeur à 0
var compteur = 0;

// Sélectionne l'élément sur lequel tu veux écouter les clics
var elementClic = document.querySelector("footer");

// Ajoute un écouteur d'événements "click"
elementClic.addEventListener("click", function() {
  // Incrémente le compteur à chaque clic
  compteur++;

  // Affiche la valeur du compteur dans la console
  console.log("Compteur :", compteur);
});