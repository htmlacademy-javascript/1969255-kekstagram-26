import {shuffleArray, debounce} from './util.js';
import { createPhotoTile } from './thumbnails.js';

const NUMBER_OF_RANDOM_PHOTOS = 10;
const TIME_OF_DELAY = 500;

const imageFiltersContainerElement = document.querySelector('.img-filters');
const imageFilterButtonsElements = document.querySelectorAll('.img-filters__button');

function showFilterButtonsContainer() {
  imageFiltersContainerElement.classList.remove('img-filters--inactive');
}

function compareCommentsQuantity(photoA, photoB){
  return photoB.comments.length - photoA.comments.length;
}

function filterByDefault(serverPhotos) {
  return createPhotoTile(serverPhotos);
}

function filterRandomly(serverPhotos) {
  const photos = serverPhotos.slice();
  const shuffledPhotos = shuffleArray(photos).slice(0, NUMBER_OF_RANDOM_PHOTOS);
  return createPhotoTile(shuffledPhotos);
}

function filterByNumberOfComments(serverPhotos) {
  const photos = serverPhotos.slice();
  const filteredPhotos = photos.sort(compareCommentsQuantity);
  return createPhotoTile(filteredPhotos);
}


function setImageFiltersClick(serverPhotos){
  function onFilterButtonClick(evt) {
    function addClassToButton() {
      if (evt.target.classList.contains('img-filters__button')) {
        for (let i = 0; i < imageFilterButtonsElements.length; i++) {
          imageFilterButtonsElements[i].classList.remove('img-filters__button--active');
        }
      }
      evt.target.classList.add('img-filters__button--active');
    }
    switch(evt.target.id) {
      case 'filter-default':
        addClassToButton();
        filterByDefault(serverPhotos);
        break;

      case 'filter-random':
        addClassToButton();
        filterRandomly(serverPhotos);
        break;

      case 'filter-discussed':
        addClassToButton();
        filterByNumberOfComments(serverPhotos);
        break;
    }
  }

  imageFiltersContainerElement.addEventListener('click', debounce(onFilterButtonClick, TIME_OF_DELAY));
}


export { setImageFiltersClick, showFilterButtonsContainer};
