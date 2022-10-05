const container = document.getElementById("container");

function makeGrid(rows, cols) {
  for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < cols; j++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      cell.addEventListener("mouseover", (e) => {cell.style.backgroundColor = "#111111"});
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
};

makeGrid(32, 32);