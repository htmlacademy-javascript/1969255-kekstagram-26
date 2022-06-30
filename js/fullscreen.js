const AVATAR_WIDTH = 35;
const AVATAR_HEIGHT = 35;

const bodyElement = document.querySelector('body');
const fullscreenPhotoModalElement = document.querySelector('.big-picture');
const socialCommentCountElement = document.querySelector('.social__comment-count');
const commentsLoaderElement = document.querySelector('.comments-loader');

const likesCountElement = document.querySelector('.likes-count');
const commentsCountElement = document.querySelector('.comments-count');
const commentsListElement = document.querySelector('.social__comments');
const photoCaptionElement = document.querySelector('.social__caption');
const fullscreenPhotoImageElement = fullscreenPhotoModalElement.querySelector('.big-picture__img img');
const closeButtonElement = document.querySelector('#picture-cancel');


function createFullscreenPhoto(url, description, likes, comments) {
  fullscreenPhotoModalElement.classList.remove('hidden');
  socialCommentCountElement.classList.add('hidden');
  commentsLoaderElement.classList.add('hidden');
  bodyElement.classList.add('modal-open');

  fullscreenPhotoImageElement.src = url;
  photoCaptionElement.textContent = description;
  likesCountElement.textContent = likes;
  commentsCountElement.textContent = comments.length;
  createComments(comments);
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


function closeWindow() {
  fullscreenPhotoModalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
}

closeButtonElement.addEventListener('click', closeWindow);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeWindow();
  }
});

export {createFullscreenPhoto};
