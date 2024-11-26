const puzzleContainer = document.getElementById("puzzle-container");
const shuffleButton = document.getElementById("shuffle-button");
let btncarica = document.getElementById("carica");
let divCampo = document.getElementById("campo");
let pieces = [];
// Eventi
shuffleButton.addEventListener("click", shufflePuzzle);
divCampo.style.display="none";

fetch("/image")
.then((res) => res.blob())
.then((blob) => {
  const imageURL = URL.createObjectURL(blob);
  createPuzzle(imageURL);
});

