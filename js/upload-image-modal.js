import { isEscapeKey } from './util.js';
import { onScaleMinusButtonClick, onScalePlusButtonClick } from './scale-control.js';
import { onImageEffectsPreviewClick, showOriginalPhoto } from './effects.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const bodyElement = document.querySelector('body');
const uploadFileElement = document.querySelector('#upload-file');
const uploadImageModalElement = document.querySelector('.img-upload__overlay');
const photoPreviewElement = document.querySelector('.img-upload__preview img');
const closeUploadImageModalElement = document.querySelector('#upload-cancel');

const uploadFormElement = document.querySelector('#upload-select-image');
const commentTextElement = uploadFormElement.querySelector('.text__description');
const hashtagElement = uploadFormElement.querySelector('.text__hashtags');


const scaleMinusButtonElement = document.querySelector('.scale__control--smaller');
const scalePlusButtonElement = document.querySelector('.scale__control--bigger');
const scaleValueElement = document.querySelector('.scale__control--value');

const effectsListElement = document.querySelector('.effects__list');

function resetElementPerameters() {
  scaleValueElement.value = '100%';
  photoPreviewElement.src = '';
  photoPreviewElement.style.filter = '';
  photoPreviewElement.style.transform = 'scale(1)';
  hashtagElement.value = '';
  uploadFileElement.value = '';
  commentTextElement.value = '';
}


function onUploadModalEscapeKeydown (evt) {
  const errorMessageElement = document.querySelector('.error');
  if (isEscapeKey(evt)) {
    if (commentTextElement === document.activeElement || hashtagElement === document.activeElement || errorMessageElement) {
      return bodyElement.classList.add('modal-open');
    }
    closeUploadImageModal();
  }
}

function uploadPhoto() {
  const file = uploadFileElement.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((element) => fileName.endsWith(element));
  if (matches) {
    photoPreviewElement.src = URL.createObjectURL(file);
  }
}


function openUploadImageModal () {
  uploadImageModalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  showOriginalPhoto();

  document.addEventListener('keydown', onUploadModalEscapeKeydown);
  scalePlusButtonElement.addEventListener('click', onScalePlusButtonClick);
  scaleMinusButtonElement.addEventListener('click', onScaleMinusButtonClick);
  effectsListElement.addEventListener('change', onImageEffectsPreviewClick);
}

function closeUploadImageModal () {
  const pristineErrorElements = document.querySelectorAll('.pristine-error');

  uploadImageModalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  resetElementPerameters();


  pristineErrorElements.forEach((errorElement) => {
    errorElement.style.display = 'none';
  });


  document.removeEventListener('keydown', onUploadModalEscapeKeydown);
  scalePlusButtonElement.removeEventListener('click', onScalePlusButtonClick);
  scaleMinusButtonElement.removeEventListener('click', onScaleMinusButtonClick);
  effectsListElement.removeEventListener('change', onImageEffectsPreviewClick);
}

function callEventListeners() {
  uploadFileElement.addEventListener('change', () => {
    uploadPhoto();
    openUploadImageModal();
  });

  closeUploadImageModalElement.addEventListener('click', () => {
    closeUploadImageModal();
  });
}


export {callEventListeners, closeUploadImageModal};
