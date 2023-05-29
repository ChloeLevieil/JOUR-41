secondColumn = document.querySelector("body > main > div > div > div > div:nth-child(2)");
buttonEdit2 = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary");

buttonEdit2.addEventListener("click", function() {
  if (secondColumn.style.color === 'green') {
    secondColumn.style.color = '';
  } else {
    secondColumn.style.color = 'green';
  }
});
