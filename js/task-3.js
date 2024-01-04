const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function placeholder(){
    nameOutput.textContent = nameInput.value.trim() || 'Anonymous';
}

nameInput.addEventListener('input', placeholder);