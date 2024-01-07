
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const inputNumber = document.querySelector('input');
const boxes = document.querySelector('#boxes');


buttonCreate.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }

function createBoxes() {

 const  amount = Number(inputNumber.value);
  if (amount < 1 || amount > 100) {
    inputNumber.value = '';
    return;
  }
  
  let sizeBox = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${sizeBox}px`;
    box.style.height = `${sizeBox}px`;
    sizeBox  += 10;
  box.style.backgroundColor = getRandomHexColor();
  boxes.appendChild(box);
}
inputNumber.value = '';
};

function destroyBoxes(){
  boxes.innerHTML = '';
}


