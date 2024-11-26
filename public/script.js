const puzzleContainer = document.getElementById("puzzle-container");
const shuffleButton = document.getElementById("shuffle-button");
let btncarica = document.getElementById("carica");
let divCampo = document.getElementById("campo");

function handleButtonClick() {
  let wait = fetch("/image", {
    method: "GET",
  });

};

shuffleButton.addEventListener("click", handleButtonClick);
