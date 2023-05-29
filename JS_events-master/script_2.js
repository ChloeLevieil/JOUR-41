let menuBtn = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > button");
let navbar = document.querySelector("#navbarHeader")

menuBtn.addEventListener("click", function(){
    navbar.classList.toggle('collapse')
})

