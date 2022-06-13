/* eslint-disable no-console */
const DESCRIPTION = [
  'Работать. Копить. Путешествовать. Повторить.',
  'Время приключений!',
  'Не сижу на месте',
  'Ни на что не променял бы это место',
  'Открываю для себя мир. Скоро вернусь',
  'Я путешествую, потому что всегда смогу получить больше денег, но никогда не получу больше времени',
  'Можно вычеркнуть эту страну из списка',
  'Свободный разум, свободная жизнь',
  'Позвольте жизни вас удивить',
  'Мой город',
  'Говорю “да” новым приключениям'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Александр',
  'Василиса',
  'Анна',
  'София',
  'Елена',
  'Илья',
  'Мария',
  'Иван',
  'Елизавета',
  'Петр',
  'Павел',
  'Николай',
  'Даниил',
  'Егор',
  'Алиса',
  'Вера',
  'Надежда',
  'Любовь',
  'Арина',
  'Марина',
  'Галина',
  'Варвара'
];

const ID = [];
const URL = [];
const COMMENT_ID = [];

function getShuffledArray(startValue, lastValue, array) {
  for (let i = startValue; i <= lastValue; i++) {
    array.push(i);
  }
  return array.sort(() => 0.5 - Math.random());
}

getShuffledArray(1, 25, ID);
getShuffledArray(1, 25, URL);
getShuffledArray(1, 235, COMMENT_ID);

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

function createCommentsArray() {
  return {
    id: getFirstArrayValue(COMMENT_ID),
    avatar: `img/avatar-${  getRandomInRange(1, 6)  }.svg`,
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAMES)
  };
}

function createPhotoDescription() {
  return {
    id: getFirstArrayValue(ID),
    url: `photos/${  getFirstArrayValue(URL)  }.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomInRange(15, 200),
    comments: Array.from({length: getRandomInRange(1, 8)}, createCommentsArray),
  };
}

const photoDescriptions = Array.from({length: 25}, createPhotoDescription);
console.log(photoDescriptions);


// Функция для проверки максимальной длины строки
function checkStringLength(stringToTest, maxStringLength) {
  return stringToTest.length <= maxStringLength;
}

checkStringLength('', 140);
