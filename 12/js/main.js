import {createPhotoTile} from './thumbnails.js';
import {callEventListeners, closeUploadImageModal} from './upload-image-modal.js';
import {checkFormValidity, setUploadImageFormSubmit} from './upload-image-form.js';
import {getData} from './api.js';
import {showDownloadDataErrorMessage} from './info-messages.js';
import {showFilterButtonsContainer, setImageFiltersClick} from './image-filters.js';

getData((photos) => {
  createPhotoTile(photos);
  showFilterButtonsContainer();
  setImageFiltersClick(photos);
},
() => {
  showDownloadDataErrorMessage();
});

callEventListeners();

checkFormValidity();

setUploadImageFormSubmit(closeUploadImageModal);
