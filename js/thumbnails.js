import {createPhotoDescriptions} from './data.js';

const photoTile = document.querySelector('.pictures');
const randomPhotoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const randomPhoto = createPhotoDescriptions();

const photoTileFragment = document.createDocumentFragment();

randomPhoto.forEach(({ url, likes, comments }) => {
  const photoElement = randomPhotoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photoTileFragment.append(photoElement);
});

photoTile.appendChild(photoTileFragment);

