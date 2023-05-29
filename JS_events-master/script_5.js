//var nucleaire = document.querySelector("header");

//('header').click(function(event){
//    event.preventDefault();
//});

var header = document.querySelector("header");
var links = document.querySelectorAll("head a");

header.addEventListener("click", function(event) {
  event.preventDefault();
  links.forEach(function(link) {
    link.removeAttribute("href");
  });
});