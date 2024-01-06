const form = document.querySelector('.login-form')
form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event){
event.preventDefault();

const email = form.elements.email.value.trim();
const password = form.elements.password.value.trim();

const userData = {
    email,
    password,
};

if (userData.email === "" || userData.password === "") {
    alert("All form fields must be filled in");
  } else{
 console.log(userData);
 form.reset();
  };
  
}