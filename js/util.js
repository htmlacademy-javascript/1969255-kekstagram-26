const MAX_STRING_LENGTH = 140;

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

export {checkStringLength, isEscapeKey, debounce, shuffleArray};
