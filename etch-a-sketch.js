const container = document.getElementById("container");
let gridSize = "32";
let mode = "grayscale";

function makeGrid(rows, cols) {
  container.textContent = "";
  for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < cols; j++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      cell.addEventListener("mouseover", (e) => {
        switch(mode) {
          case "grayscale":
            cell.style.background = "#111111";
            break;
          case "rainbow":
            randomColor = Math.floor(Math.random()*16777215).toString(16);
            cell.style.background = `#${randomColor}`;
            break;
          default:
        }
      });
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
};

const gridButton = document.getElementById("gridsize");
gridButton.addEventListener("click", () => {
  gridSize = prompt("Select a grid size (max 100):");
  if (gridSize === null || gridSize === "" || isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    gridSize = 32;
  }
  makeGrid(gridSize, gridSize);
});

const rainbowButton = document.getElementById("rainbow");
rainbowButton.addEventListener("click", () => {
  mode = "rainbow";
  makeGrid(gridSize, gridSize);
});

const grayscaleButton = document.getElementById("grayscale");
grayscaleButton.addEventListener("click", () => {
  mode = "grayscale";
  makeGrid(gridSize, gridSize);
});

makeGrid(gridSize, gridSize);