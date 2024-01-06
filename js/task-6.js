function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


//Атрибути HTML
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const inputNumber = document.querySelector('input');
const boxes = document.querySelector('#boxes');

// Події
buttonCreate.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);

// Функції

function createBoxes() {
 boxes.innerHTML = '';

 const  amount = inputNumber.value;
  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100!')
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


