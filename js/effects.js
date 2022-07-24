const sliderElement = document.querySelector('.effect-level__slider');
const sliderBlockElement = document.querySelector('.effect-level');
const photoPreviewElement = document.querySelector('.img-upload__preview img');
const originalPhotoPreviewElement = document.querySelector('#effect-none');
const effectLevelValueElement = document.querySelector('.effect-level__value');


function resetParametersOfElement() {
  photoPreviewElement.className = '';
  photoPreviewElement.style.filter = '';
  sliderBlockElement.classList.remove('visually-hidden');
  sliderElement.noUiSlider.off();
}

function showOriginalPhoto() {
  resetParametersOfElement();
  sliderBlockElement.classList.add('visually-hidden');
  originalPhotoPreviewElement.checked = true;
}

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

function changeFilter(currentFilter, measurementUnits) {
  effectLevelValueElement.value = `${sliderElement.noUiSlider.get()}`;
  photoPreviewElement.style.filter = `${currentFilter}(${  effectLevelValueElement.value = sliderElement.noUiSlider.get() }${measurementUnits})`;
}


function onImageEffectsPreviewClick(evt) {
  switch (evt.target.value) {
    case 'none':
      showOriginalPhoto();
      break;

    case 'chrome':
      resetParametersOfElement();
      photoPreviewElement.classList.add('effects__preview--chrome');

      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });

      sliderElement.noUiSlider.on('update', () => {
        changeFilter('grayscale', '');
      });
      break;

    case 'sepia':
      resetParametersOfElement();
      photoPreviewElement.classList.add('effects__preview--sepia');

      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });

      sliderElement.noUiSlider.on('update', () => {
        changeFilter('sepia', '');
      });
      break;

    case 'marvin':
      resetParametersOfElement();
      photoPreviewElement.classList.add('effects__preview--marvin');

      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
      });

      sliderElement.noUiSlider.on('update', () => {
        changeFilter('invert', '%');
      });
      break;

    case 'phobos':
      resetParametersOfElement();
      photoPreviewElement.classList.add('effects__preview--phobos');

      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });

      sliderElement.noUiSlider.on('update', () => {
        changeFilter('blur', 'px');
      });
      break;

    case 'heat':
      resetParametersOfElement();
      photoPreviewElement.classList.add('effects__preview--heat');

      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });

      sliderElement.noUiSlider.on('update', () => {
        changeFilter('brightness', '');
      });
      break;
  }
}

export {onImageEffectsPreviewClick, showOriginalPhoto};
