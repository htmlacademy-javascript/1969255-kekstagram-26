import { checkStringLength, isEscapeKey } from './util.js';

const VALID_HASHTAG = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const MAX_NUMBER_OF_HASHTAGS = 5;


const uploadFileElement = document.querySelector('#upload-file');
const uploadImageModalElement = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const closeUploadImageModalElement = document.querySelector('#upload-cancel');

const uploadFormElement = document.querySelector('#upload-select-image');
const commentTextElement = uploadFormElement.querySelector('.text__description');
const hashtagElement = uploadFormElement.querySelector('.text__hashtags');

function onUploadModalEscapeKeydown (event) {
  if (isEscapeKey(event)) {
    if (commentTextElement === document.activeElement || hashtagElement === document.activeElement) {
      return bodyElement.classList.add('modal-open');
    }
    uploadImageModalElement.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
    uploadFileElement.value = '';
    commentTextElement.value = '';
    closeUploadImageModal();
  }
}

function openUploadImageModal () {
  uploadImageModalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  document.addEventListener('keydown', onUploadModalEscapeKeydown);
}

function closeUploadImageModal () {
  uploadImageModalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  document.removeEventListener('keydown', onUploadModalEscapeKeydown);
}

uploadFileElement.addEventListener('change', () => {
  openUploadImageModal();
});

closeUploadImageModalElement.addEventListener('click', () => {
  closeUploadImageModal();

});


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

uploadFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});


