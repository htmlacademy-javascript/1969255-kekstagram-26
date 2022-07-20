const MAX_STRING_LENGTH = 140;

//функция по поиску случайного числа из диапазона
function getRandomInRange(firstValue, secondValue) {
  const lower = Math.ceil(Math.min(Math.abs(firstValue), Math.abs(secondValue)));
  const upper = Math.floor(Math.max(Math.abs(firstValue), Math.abs(secondValue)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const getRandomArrayElement = (elements) => elements[getRandomInRange(0, elements.length - 1)];

// Функция для проверки максимальной длины строки
function checkStringLength(value) {
  return value.length <= MAX_STRING_LENGTH;
}

function isEscapeKey (evt) {
  return evt.key === 'Escape';
}

function shuffleArray (items) {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}


function debounce (callback, timeoutDelay) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {getRandomInRange, getRandomArrayElement, checkStringLength, isEscapeKey, debounce, shuffleArray};
