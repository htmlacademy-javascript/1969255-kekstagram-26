import { isEscapeKey } from './util.js';

const successMessageTemplateElement = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorMessageTemplateElement = document.querySelector('#error')
  .content
  .querySelector('.error');

function showUploadFormSuccessMessage () {
  const successMessage = successMessageTemplateElement.cloneNode(true);
  const successMessageWindowElement = successMessage.querySelector('.success__inner');
  const successButtonElement = successMessage.querySelector('.success__button');

  document.body.append(successMessage);

  function onUploadFormSuccessMessageEscapeKeydown (evt) {
    if (isEscapeKey(evt)) {
      closeUploadFormSuccessMessage();
    }
  }

  function onOutsideSuccessMessageClick(evt) {
    const isClickInside = successMessageWindowElement.contains(evt.target);

    if (!isClickInside) {
      closeUploadFormSuccessMessage();
    }
  }

  function closeUploadFormSuccessMessage() {
    successMessage.remove();
    successButtonElement.removeEventListener('click', closeUploadFormSuccessMessage);
    document.removeEventListener('keydown', onUploadFormSuccessMessageEscapeKeydown);
  }
  successButtonElement.addEventListener('click', closeUploadFormSuccessMessage);
  document.addEventListener('keydown', onUploadFormSuccessMessageEscapeKeydown);
  document.addEventListener('click', onOutsideSuccessMessageClick);
}


function showUploadFormErrorMessage () {
  const errorMessage = errorMessageTemplateElement.cloneNode(true);
  const errorMessageWindowElement = errorMessage.querySelector('.error__inner');
  const errorButtonElement = errorMessage.querySelector('.error__button');

  document.body.append(errorMessage);

  function onUploadFormErrorMessageEscapeKeydown (evt) {
    if (isEscapeKey(evt)) {
      if(errorMessage) {
        closeUploadFormErrorMessage();
      }
    }
  }

  function onOutsideErrorMessageClick(evt) {
    const isClickInside = errorMessageWindowElement.contains(evt.target);

    if (!isClickInside) {
      closeUploadFormErrorMessage();
    }
  }

  function closeUploadFormErrorMessage () {
    errorMessage.remove();
    errorButtonElement.removeEventListener('click', closeUploadFormErrorMessage);
    document.removeEventListener('keydown', onUploadFormErrorMessageEscapeKeydown);
    document.removeEventListener('click', onOutsideErrorMessageClick);
  }

  errorButtonElement.addEventListener('click', closeUploadFormErrorMessage);
  document.addEventListener('keydown', onUploadFormErrorMessageEscapeKeydown);
  document.addEventListener('click', onOutsideErrorMessageClick);
}


function showDownloadDataErrorMessage () {
  const errorMessage = errorMessageTemplateElement.cloneNode(true);
  const errorTitleElement = errorMessage.querySelector('.error__title');
  const errorButtonElement = errorMessage.querySelector('.error__button');

  errorTitleElement.textContent = 'Ошибка загрузки данных с сервера';
  errorButtonElement.textContent = 'Перезагрузить страницу';
  document.body.append(errorMessage);

  function closeDownloadDataErrorMessage() {
    location.reload();
    errorMessage.remove();
    errorButtonElement.removeEventListener('click', closeDownloadDataErrorMessage);
  }

  errorButtonElement.addEventListener('click', closeDownloadDataErrorMessage);
}


export {showUploadFormSuccessMessage, showUploadFormErrorMessage, showDownloadDataErrorMessage};
