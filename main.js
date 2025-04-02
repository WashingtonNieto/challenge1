window.addEventListener("DOMContentLoaded",() => {

  const form = document.querySelector('.container__content__form');

  const inputEmail = document.querySelector('.container__content__form__email');

  const error = document.querySelector('.container__content__form__email--error');

  form.addEventListener('submit', () => {
    event.preventDefault();
    // console.log('dfsdf');
    const validaCorreo = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    // if(validaCorreo.test(inputEmail.value) == true){
    if(validaCorreo.test(inputEmail.value)){
      inputEmail.style.border = '1px solid  hsl(0, 36%, 70%);';
      inputEmail.style.backgroundImage = 'url("")';
      error.innerHTML='';
    }else{
      event.preventDefault();

      inputEmail.style.border = '1px solid red';
      inputEmail.style.backgroundImage = 'url("./assets/images/icon-error.svg")';
      error.innerHTML='Please provide a valid email';
    }

  })

})
