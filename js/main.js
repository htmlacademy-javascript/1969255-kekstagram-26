//функцию по поиска случайного числа нашел по ссылке https://myrusakov.ru/js-random-numbers.html
function getRandomInRange(minValue, maxValue) {
  if (minValue < 0 || maxValue < 0) {
    // не придумал, что можно сделать вместо console.log для вывода ошибки
    // eslint-disable-next-line no-console
    return console.log('Значения должны быть положительными');
  }
  if (maxValue <= minValue) {
    // изначально менял минимальное и максимальное значение местами создавая дополнительную переменную,
    // но решил заменить значения сразу в выводе.
    // в таком случае в данном диапазоне все равно будет выдаваться случайное значение
    return Math.floor(Math.random() * (minValue - maxValue + 1)) + maxValue;
  }
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

getRandomInRange(0, 10);

// Функция для проверки максимальной длины строки
function checkStringLength(stringToTest, maxStringLength) {
  if (stringToTest.length <= maxStringLength) {
    return true;
  }
  return false;
}

checkStringLength('', 140);
