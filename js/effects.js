const sliderElement = document.querySelector('.effect-level__slider');
const sliderBlockElement = document.querySelector('.effect-level');
const photoPreviewElement = document.querySelector('.img-upload__preview img');
const orginalPhotoPreviewElement = document.querySelector('#effect-none');
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
  orginalPhotoPreviewElement.checked = true;

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

function changeFilter(currentFilter, measurmentUnits) {
  effectLevelValueElement.value = `${sliderElement.noUiSlider.get()}`;
  photoPreviewElement.style.filter = `${currentFilter}(${  effectLevelValueElement.value = sliderElement.noUiSlider.get() }${measurmentUnits})`;
}


function onImageEffectsPreviewClick(evt) {
  if (evt.target.value === 'none') {
    showOriginalPhoto();
  } else if (evt.target.value === 'chrome') {
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

  } else if (evt.target.value === 'sepia') {
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

  } else if (evt.target.value === 'marvin') {
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

  } else if (evt.target.value === 'phobos') {
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

  } else if (evt.target.value === 'heat') {
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
  }
}

export {onImageEffectsPreviewClick, showOriginalPhoto};
