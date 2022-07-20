import { createFullscreenPhoto } from './fullscreen.js';

const photoTileElement = document.querySelector('.pictures');
const photoTemplateElement = document.querySelector('#picture')
  .content
  .querySelector('.picture');


function createPhotoTile(photo) {

  const photoTileFragment = document.createDocumentFragment();

  photo.forEach(({ url, description, likes, comments }) => {
    const photoElement = photoTemplateElement.cloneNode(true);

    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;

    photoElement.addEventListener('click', () => {
      createFullscreenPhoto(url, description, likes, comments);
    });

    photoTileFragment.append(photoElement);
  });
  removePhotoTile();
  return photoTileElement.append(photoTileFragment);
}

function removePhotoTile() {
  const photos = photoTileElement.querySelectorAll('.picture');
  photos.forEach((photo) => {
    photo.remove();
  });
}

export {createPhotoTile, removePhotoTile};
