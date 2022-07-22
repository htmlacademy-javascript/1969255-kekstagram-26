import { checkStringLength } from './util.js';
import {showUploadFormErrorMessage, showUploadFormSuccessMessage} from './info-messages.js';
import { sendData } from './api.js';

const VALID_HASHTAG = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const MAX_NUMBER_OF_HASHTAGS = 5;

const uploadFormElement = document.querySelector('#upload-select-image');
const commentTextElement = uploadFormElement.querySelector('.text__description');
const hashtagElement = uploadFormElement.querySelector('.text__hashtags');
const submitButtonElement = uploadFormElement.querySelector('#upload-submit');

const pristine = new Pristine(uploadFormElement, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'form__error'
});

function parseHashtags() {
  return hashtagElement.value.toLowerCase().trim().split(' ').filter((x) => x.length > 0);
}


function checkHashtagValidity() {
  const hashtags = parseHashtags();

  for (let i = 0; i < hashtags.length; i++) {
    if (!VALID_HASHTAG.test(hashtags[i])) {
      return false;
    }
  }

  return true;
}

function checkHashtagLength() {
  const hashtags = parseHashtags();
  return hashtags.length <= MAX_NUMBER_OF_HASHTAGS;
}

function checkHashtagsRepeats() {
  const hashtags = parseHashtags();
  const uniqueHashtags = [...new Set(hashtags)];
  return hashtags.length === uniqueHashtags.length;
}

function checkFormValidity() {
  pristine.addValidator(
    hashtagElement,
    checkHashtagValidity,
    'хэш-тег начинается с символа # (решётка) <br> строка после решётки должна состоять из букв и чисел <br> хеш-тег не может состоять только из одной решётки <br> максимальная длина одного хэш-тега 20 символов, включая решётку'
  );

  pristine.addValidator(
    hashtagElement,
    checkHashtagLength,
    'Количество хэштэгов не более 5'
  );

  pristine.addValidator(
    hashtagElement,
    checkHashtagsRepeats,
    'Хэштэги не должны повторяться'
  );

  pristine.addValidator(
    commentTextElement,
    checkStringLength,
    'Максимум 140 символов'
  );
}

function blockSubmitButton() {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = 'Публикуем...';
}

function unblockSubmitButton() {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = 'Опубликовать';
}


function setUploadImageFormSubmit (onSuccess) {
  uploadFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          showUploadFormSuccessMessage();
        },
        () => {
          showUploadFormErrorMessage();
          unblockSubmitButton();
        },
        new FormData(evt.target)
      );
    }
  });
}

export {checkFormValidity, setUploadImageFormSubmit};
