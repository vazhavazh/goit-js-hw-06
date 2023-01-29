function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

const newBoxes = document.getElementById("boxes");

createButton.addEventListener("click", function (e) {
  const boxQuantity = document.querySelector("input").value;
  createBoxes(e, boxQuantity);
});
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(e, amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.background = getRandomHexColor();

    newBoxes.append(box);

    size += 10;
  }
}

function destroyBoxes() {
  newBoxes.innerHTML = "";
}

// const controls = document.querySelector("#controls");
// const input = document.querySelector("input");
// const newBoxes= document.querySelector("#boxes");

// const buttonCreate = document.querySelector("button[data-create]");
// const buttonDestroy = document.querySelector("button[data-destroy]");

// function createBoxes(event) {
//   let arrea = [];
//   if (input.value)
//     for (let i = 1; i <= input.value; i++) {
//       const div = document.createElement("div");
//       div.style.width = `${20 + 10 * i}px`;
//       div.style.height = `${20 + 10 * i}px`;
//       div.style.backgroundColor = getRandomHexColor();
//       console.log(div);
//       arrea.push(div);
//     }

//   return newBoxes.append(...arrea);
// }

// buttonCreate.addEventListener("click", createBoxes);

// function deleteDiv(event) {
//   boxes.innerHTML = "";
//   input.value = "";
// }

// buttonDestroy.addEventListener("click", deleteDiv);
