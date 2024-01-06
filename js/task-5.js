function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const spanColor = document.querySelector('.color')
const body = document.querySelector('body')

function  onButtonClick(){
  const randomColor = getRandomHexColor();
  spanColor.textContent = randomColor;
  body.style.backgroundColor = randomColor;
  
}

button.addEventListener('click', onButtonClick);