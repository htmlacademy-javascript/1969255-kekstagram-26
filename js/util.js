function getShuffledArray(startValue, lastValue, array) {
  for (let i = startValue; i <= lastValue; i++) {
    array.push(i);
  }
  return array.sort(() => 0.5 - Math.random());
}

function getFirstArrayValue (array) {
  return array.shift();
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

export {getShuffledArray, getFirstArrayValue, getRandomInRange, getRandomArrayElement}
