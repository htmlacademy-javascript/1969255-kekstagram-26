import {createPhotoDescriptions} from './data.js';
import { createFullscreenPhoto } from './fullscreen.js';

const photoTile = document.querySelector('.pictures');
const randomPhotoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const allPhotos = createPhotoDescriptions();

function createPhotoTile(photo) {

  const photoTileFragment = document.createDocumentFragment();

  photo.forEach(({ url, description, likes, comments }) => {
    const photoElement = randomPhotoTemplate.cloneNode(true);

    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;

    photoElement.addEventListener('click',() => {
      createFullscreenPhoto(url, description, likes, comments);
    });
    photoTileFragment.append(photoElement);
  });

  return photoTile.append(photoTileFragment);
}

createPhotoTile(allPhotos);

