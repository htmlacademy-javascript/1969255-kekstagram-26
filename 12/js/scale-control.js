const SCALE_VALUE_STEP = 25;
const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;


const scaleValueElement = document.querySelector('.scale__control--value');
const photoPreviewElement = document.querySelector('.img-upload__preview img');


function onScalePlusButtonClick()  {
  let currentValue = parseInt(scaleValueElement.value, 10);

  if (currentValue >= MAX_SCALE_VALUE) {
    return false;
  }
  scaleValueElement.value = `${currentValue += SCALE_VALUE_STEP  }%`;
  photoPreviewElement.style.transform = `scale(${currentValue/100  })`;
}

function onScaleMinusButtonClick()  {
  let currentValue = parseInt(scaleValueElement.value, 10);

  if (currentValue <= MIN_SCALE_VALUE) {
    return false;
  }

  scaleValueElement.value = `${currentValue -= SCALE_VALUE_STEP  }%`;
  photoPreviewElement.style.transform = `scale(${currentValue/100  })`;
}

export {onScaleMinusButtonClick, onScalePlusButtonClick};
