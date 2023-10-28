let gridSize = 16;

const divContainer = document.querySelector(".divContainer");
const resetBtn = document.querySelector(".resetBtn");
const labelValue = document.querySelector(".sizeValue");
const slider = document.querySelector(".sizeSlider");
const blackBtn = document.querySelector(".blackBtn");
const randomColourBtn = document.querySelector(".randomColourBtn");
const eraserBtn = document.querySelector(".eraserBtn");
const buttons = document.querySelectorAll("button");


function generateGrid() {
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", `rows r${i}`);
    divContainer.appendChild(row);
  }
  
  const rows = document.querySelectorAll(".rows");
  rows.forEach((row) => {
    for (let i = 0; i < gridSize; i++) {
      const column = document.createElement("div");
      column.setAttribute("class", `columns c${i}`);
      row.appendChild(column);
    }
  })

  const lastRow = divContainer.lastElementChild;
  const lastRowColumns = lastRow.querySelectorAll(".columns");
  lastRowColumns.forEach((column) => column.classList.add("lastRow"))

  rows.forEach((row) => {
    const lastColumn = row.lastElementChild;
    lastColumn.classList.add("lastColumn");
  })
}


function removeGrid() {
  const rows = document.querySelectorAll(".rows");
  rows.forEach((row) => divContainer.removeChild(row));
}


function randomColour() {
  const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
  let colourCode = "#";

  for (let i = 0; i < 6; i++) {
    colourCode += hexArray[Math.floor(Math.random() * 16)];
  }
  return colourCode;
}


labelValue.innerHTML = `${slider.value} x ${slider.value}`;

generateGrid();

slider.addEventListener("input", () => {
  buttons.forEach((button) => button.classList.remove("active"));
  gridSize = slider.value;
  labelValue.innerHTML = `${slider.value} x ${slider.value}`;
  removeGrid();
  generateGrid();
})

blackBtn.addEventListener("click", () => {
  buttons.forEach((button) => button.classList.remove("active"));
  blackBtn.classList.add("active");
  const columns = document.querySelectorAll(".columns");
  columns.forEach((column) => {
    column.addEventListener("mouseover", () => column.style.backgroundColor = "black");
  })
})

randomColourBtn.addEventListener("click", () => {
  buttons.forEach((button) => button.classList.remove("active"));
  randomColourBtn.classList.add("active");
  const columns = document.querySelectorAll(".columns");
  columns.forEach((column) => {
    column.addEventListener("mouseover", () => column.style.backgroundColor = randomColour());
  })
})

eraserBtn.addEventListener("click", () => {
  buttons.forEach((button) => button.classList.remove("active"));
  eraserBtn.classList.add("active");
  const columns = document.querySelectorAll(".columns");
  columns.forEach((column) => {
    column.addEventListener("mouseover", () => column.style.backgroundColor = "white");
  })
})

resetBtn.addEventListener("click", () => {
  const columns = document.querySelectorAll(".columns");
  columns.forEach((column) => column.removeAttribute("style"));
})