
const body = document.querySelector('body');
const fullscreenPhotoModal = document.querySelector('.big-picture');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const commentsList = document.querySelector('.social__comments');
const photoCaption = document.querySelector('.social__caption');
const fullscreenPhotoImage = fullscreenPhotoModal.querySelector('.big-picture__img img');
const closeButton = document.querySelector('#picture-cancel');

const AVATAR_WIDTH = 35;
const AVATAR_HEIGHT = 35;


function createFullscreenPhoto(url, description, likes, comments) {
  fullscreenPhotoModal.classList.remove('hidden');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');

  fullscreenPhotoImage.src = url;
  photoCaption.textContent = description;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  createComments(comments);
}

function createComments(comments) {
  commentsList.innerHTML = '';

  comments.forEach(({avatar, name, message}) => {

    const newCommentItem = document.createElement('li');
    const newAvatar = document.createElement('img');
    const newCommentText = document.createElement('p');

    newCommentItem.classList.add('social__comment');

    newAvatar.classList.add('social__picture');
    newAvatar.src = avatar;
    newAvatar.alt = name;
    newAvatar.width = AVATAR_WIDTH;
    newAvatar.height = AVATAR_HEIGHT;

    newCommentText.classList.add('social__text');
    newCommentText.textContent = message;

    newCommentItem.append(newAvatar);
    newCommentItem.append(newCommentText);

    commentsList.append(newCommentItem);
  });
  return commentsList;
}


function closeWindow() {
  fullscreenPhotoModal.classList.add('hidden');
  body.classList.remove('modal-open');
}

closeButton.addEventListener('click', closeWindow);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeWindow();
  }
});

export {createFullscreenPhoto};
