const fieldInput = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");
let width = 30;
let height = 30;
const amount = fieldInput.value;

createBtn.addEventListener("click", createAdd);
destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function createBoxes() {
  const amount = fieldInput.value;
  boxes.innerHTML = "";
  width = 30;
  height = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
    fieldInput.value = "";
    width += 10;
    height += 10;
  }
}

function createAdd() {
  if (amount >= 1 || amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
  }
}
