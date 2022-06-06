//функцию по поиска случайного числа нашел по ссылке https://myrusakov.ru/js-random-numbers.html
function getRandomInRange(minValue, maxValue) {
  if (minValue < 0 || maxValue < 0) {
    return 0;
  }
  if (maxValue <= minValue) {
    return Math.floor(Math.random() * (minValue - maxValue + 1)) + maxValue;
  }
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

getRandomInRange(0, 10);

// Функция для проверки максимальной длины строки
function checkStringLength(stringToTest, maxStringLength) {
  return stringToTest.length <= maxStringLength;
}

checkStringLength('', 140);
