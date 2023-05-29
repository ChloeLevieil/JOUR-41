//firstcolumn = document.querySelector("body > main > div > div > div > div:nth-child(1)");
//buttonedit = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary");
//style ="color: red"

//buttonedit.addEventListener("click", function(){
//    document.getElementById("firstcolumn").classList.add("style")
//});

// Sélectionnez le premier élément de la colonne
firstColumn = document.querySelector("body > main > div > div > div > div:nth-child(1)");

// Sélectionnez le bouton d'édition
buttonEdit = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary");

// Ajoutez un écouteur d'événement de clic au bouton d'édition
buttonEdit.addEventListener("click", function() {
  // Ajoutez la classe correspondant au style à la première colonne
  firstColumn.style.color = "red";
});