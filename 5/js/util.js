function createShuffledArray(startValue, lastValue, items) {
  for (let i = startValue; i <= lastValue; i++) {
    items.push(i);
  }
  return items;
}

function getFirstArrayValue (items) {
  return items.shift();
}

//функция по поиску случайного числа из диапазона
function getRandomInRange(firstValue, secondValue) {
  const lower = Math.ceil(Math.min(Math.abs(firstValue), Math.abs(secondValue)));
  const upper = Math.floor(Math.max(Math.abs(firstValue), Math.abs(secondValue)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const getRandomArrayElement = (elements) => elements[getRandomInRange(0, elements.length - 1)];

// Функция для проверки максимальной длины строки
function checkStringLength(stringToTest, maxStringLength) {
  return stringToTest.length <= maxStringLength;
}

checkStringLength('', 140);

export {createShuffledArray, getFirstArrayValue, getRandomInRange, getRandomArrayElement};
