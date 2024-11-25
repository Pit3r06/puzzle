const puzzleContainer = document.getElementById("puzzle-container");
const shuffleButton = document.getElementById("shuffle-button");
let pieces = [];
// Eventi
shuffleButton.addEventListener("click", shufflePuzzle);
window.onload = () => {
    fetch("/image")
    .then((res) => res.blob())
    .then((blob) => {
      const imageURL = URL.createObjectURL(blob);
      createPuzzle(imageURL);
    });
  
}

// Crea i pezzi del puzzle
function createPuzzle(imageURL) {
  pieces = Array.from({ length: 16 }, (_, i) => i);
  pieces.forEach((i) => {
    const piece = document.createElement("div");
    piece.className = "puzzle-piece";
    if (i === 15) {
      piece.classList.add("empty");
    } else {
      const x = (i % 4) * -100;
      const y = Math.floor(i / 4) * -100;
      piece.style.backgroundImage = `url(${imageURL})`;
      piece.style.backgroundPosition = `${x}px ${y}px`;
    }
    piece.dataset.index = i;
    puzzleContainer.appendChild(piece);
  });
}

// Mescola i pezzi
function shufflePuzzle() {
  pieces = pieces.sort(() => Math.random() - 0.5);
  renderPuzzle();
}

// Mostra il puzzle
function renderPuzzle() {
  puzzleContainer.innerHTML = "";
  pieces.forEach((i) => {
    const piece = document.createElement("div");
    piece.className = "puzzle-piece";
    if (i === 15) {
      piece.classList.add("empty");
    } else {
      const x = (i % 4) * -100;
      const y = Math.floor(i / 4) * -100;
      piece.style.backgroundPosition = `${x}px ${y}px`;
      piece.style.backgroundImage = `url("/img/puzzle.jpeg")`;
    }
    piece.dataset.index = i;
    puzzleContainer.appendChild(piece);
  });
}

