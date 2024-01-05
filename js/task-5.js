function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const spanColor = document.querySelector('.color')
const bodyStule = document.querySelector('body')

button.addEventListener('click', onButtonClick);

function  onButtonClick(){
  bodyStule.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
}