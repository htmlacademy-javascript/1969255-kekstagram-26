import {isEscapeKey } from './util.js';

const AVATAR_WIDTH = 35;
const AVATAR_HEIGHT = 35;
const NUMBER_OF_COMMENTS_TO_SHOW = 5;
const FIRST_INDEX_OF_COMMENT = 0;

const bodyElement = document.querySelector('body');
const fullscreenPhotoModalElement = document.querySelector('.big-picture');
const commentsLoadMoreButtonElement = document.querySelector('.comments-loader');
const uploadedCommentsCountElement = document.querySelector('.social__comment-count');
const allCommentsCountElement = document.querySelector('.comments-count');
const likesCountElement = document.querySelector('.likes-count');
const commentsListElement = document.querySelector('.social__comments');
const photoCaptionElement = document.querySelector('.social__caption');
const fullscreenPhotoImageElement = fullscreenPhotoModalElement.querySelector('.big-picture__img img');
const closeButtonElement = document.querySelector('#picture-cancel');

let count = NUMBER_OF_COMMENTS_TO_SHOW;
let commentaries = [];

function onFullScreenPhotoModalEscapeDown(event) {
  if (isEscapeKey(event)) {
    event.preventDefault();
    closeFullscreenPhotoModal();
  }
}

function onLoadMoreButtonClick() {
  count += NUMBER_OF_COMMENTS_TO_SHOW;
  showComments(commentaries);
}

function openFullscreenPhotoModal() {
  fullscreenPhotoModalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  commentsLoadMoreButtonElement.addEventListener('click', onLoadMoreButtonClick);
  document.addEventListener('keydown', onFullScreenPhotoModalEscapeDown);
  closeButtonElement.addEventListener('click', closeFullscreenPhotoModal);
}

function closeFullscreenPhotoModal() {
  fullscreenPhotoModalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  commentsLoadMoreButtonElement.removeEventListener('click', onLoadMoreButtonClick);
  document.removeEventListener('keydown', onFullScreenPhotoModalEscapeDown);
  closeButtonElement.removeEventListener('click', closeFullscreenPhotoModal);
}


function createFullscreenPhoto(url, description, likes, comments) {
  count =  NUMBER_OF_COMMENTS_TO_SHOW;

  openFullscreenPhotoModal();

  fullscreenPhotoImageElement.src = url;
  photoCaptionElement.textContent = description;
  likesCountElement.textContent = likes;
  allCommentsCountElement.textContent = comments.length;

  commentaries = comments;
  showComments(commentaries);
}

function createComments(comments) {
  commentsListElement.innerText = '';

  comments.forEach(({avatar, name, message}) => {
    const newCommentItemElement = document.createElement('li');
    const newAvatarElement = document.createElement('img');
    const newCommentTextElement = document.createElement('p');

    newCommentItemElement.classList.add('social__comment');

    newAvatarElement.classList.add('social__picture');
    newAvatarElement.src = avatar;
    newAvatarElement.alt = name;
    newAvatarElement.width = AVATAR_WIDTH;
    newAvatarElement.height = AVATAR_HEIGHT;

    newCommentTextElement.classList.add('social__text');
    newCommentTextElement.textContent = message;

    newCommentItemElement.append(newAvatarElement);
    newCommentItemElement.append(newCommentTextElement);

    commentsListElement.append(newCommentItemElement);
  });
  return commentsListElement;
}

function showComments(commentsList) {
  const currentComments = commentsList.slice(FIRST_INDEX_OF_COMMENT, count);
  const createCommentsList = createComments(currentComments);
  commentsLoadMoreButtonElement.classList.remove('hidden');

  uploadedCommentsCountElement.textContent = `${currentComments.length  } из ${commentsList.length} комментариев`;

  if (count >= commentsList.length) {
    commentsLoadMoreButtonElement.classList.add('hidden');
  }
  return createCommentsList;
}

export {createFullscreenPhoto};
