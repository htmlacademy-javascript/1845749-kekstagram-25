// /*eslint-disable*/
import { uploadForm, pristine } from './validate-form.js';
import { closePicture } from './process-form-data.js';

const URL_POST = 'https://25.javascript.pages.academy/kekstagram';
const successMessageTemplate = document.getElementById('success').content;
const errorMessageTemplate = document.getElementById('error').content;
const submitButton = document.querySelector('.img-upload__submit');

function onSubmit(e) {
  e.preventDefault();

  const isValid = pristine.validate();

  if(!isValid) {
    return false;
  }

  pristine.reset();
  uploadForm.removeEventListener('submit', onSubmit);
  disableSubmitButton();
  sendImage(new FormData(e.target));
}

function disableSubmitButton() {
  submitButton.disabled = true;
  submitButton.textContent = 'Загружаем';
}

async function sendImage(data) {
  const response = await fetch(URL_POST, {
    method: 'POST',
    body: data,
  });

  checkResponse(response);
}

function checkResponse(response) {
  if (!response.ok) {
    renderSuccessMessage();
  } else {
    renderErrorMessage();
  }

  closePicture();
  unblockForm();
}

function renderSuccessMessage () {
  const successMessage = successMessageTemplate.querySelector('.success').cloneNode(true);
  const coolButton = successMessage.querySelector('.success__button');
  document.body.appendChild(successMessage);

  function onEsc(e) {
    if (e.code === 'Escape' ) {
      removeSuccessMessage(e);
    }
  }

  function closeSuccesPopup() {
    successMessage.remove();
  }

  function removeSuccessMessage(event) {
    event.preventDefault();
    coolButton.removeEventListener('click', removeSuccessMessage);
    document.removeEventListener('click', removeSuccessMessage);
    document.removeEventListener('keydown', onEsc);
    closeSuccesPopup();
  }

  coolButton.addEventListener('click', removeSuccessMessage);
  document.addEventListener('click', removeSuccessMessage);
  document.addEventListener('keydown', onEsc);
}

function renderErrorMessage () {
  const errorMessage = errorMessageTemplate.querySelector('.error').cloneNode(true);
  const failButton = errorMessage.querySelector('.error__button');
  document.body.appendChild(errorMessage);

  function onEsc(e) {
    if (e.code === 'Escape' ) {
      removeErrorMessage(e);
    }
  }

  function closeErrorPopup() {
    errorMessage.remove();
  }

  function removeErrorMessage(event) {
    event.preventDefault();
    failButton.removeEventListener('click', removeErrorMessage);
    document.removeEventListener('click', removeErrorMessage);
    document.removeEventListener('keydown', onEsc);
    closeErrorPopup();
  }

  failButton.addEventListener('click', removeErrorMessage);
  document.addEventListener('click', removeErrorMessage);
  document.addEventListener('keydown', onEsc);
}

function unblockForm() {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
  uploadForm.addEventListener('submit', onSubmit);
}

export {onSubmit};
