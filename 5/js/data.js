import {createShuffledArray, getFirstArrayValue, getRandomInRange, getRandomArrayElement} from './util.js';

const DESCRIPTIONS = [
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

const MESSAGES = [
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

const FIRST_DESCRIPTION_NUMBER = 1;
const NUMBER_OF_DESCRIPTIONS = 25;
const FIRST_AVATAR_ID = 1;
const LAST_AVATAR_ID = 6;
const MIN_LIKES_NUMBER = 15;
const MAX_LIKES_NUMBER = 200;
const MIN_COMMENTS_NUMBER = 5;
const MAX_COMMENTS_NUMBER = 15;
const MIN_RANDOM_COMMENTS_IDS_NUMBER = 1;
const MAX_RANDOM_COMMENTS_IDS_NUMBER = 400;


const IDS = createShuffledArray(FIRST_DESCRIPTION_NUMBER, NUMBER_OF_DESCRIPTIONS, []);
const COMMENTS_IDS = createShuffledArray(MIN_RANDOM_COMMENTS_IDS_NUMBER, MAX_RANDOM_COMMENTS_IDS_NUMBER, []);

function createCommentsArray() {
  return {
    id: getFirstArrayValue(COMMENTS_IDS),
    avatar: `img/avatar-${  getRandomInRange(FIRST_AVATAR_ID, LAST_AVATAR_ID)  }.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES)
  };
}

function createPhotoDescription() {
  const id = getFirstArrayValue(IDS);

  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInRange(MIN_LIKES_NUMBER, MAX_LIKES_NUMBER),
    comments: Array.from({length: getRandomInRange(MIN_COMMENTS_NUMBER, MAX_COMMENTS_NUMBER)}, createCommentsArray),
  };
}

function createPhotoDescriptions() {
  return Array.from({ length: NUMBER_OF_DESCRIPTIONS }, createPhotoDescription);
}

export {createPhotoDescriptions};
