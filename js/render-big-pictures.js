// /* eslint-disable*/
import { userObjects } from './render-miniatures.js';

const bigPictureSection = document.querySelector('.big-picture');
const pictureImg = document.querySelector('.big-picture__img').childNodes[1];
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const commentsSection = document.querySelector('.social__comments');
const pictureDescription = document.querySelector('.social__caption');
const commentsCountBlock = document.querySelector('.social__comment-count');
const loadCommentButton = document.querySelector('.comments-loader');
const body = document.getElementsByTagName('body')[0];
const cancelButton = document.getElementById('picture-cancel');

cancelButton.addEventListener('click', cancelPicture);
document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' ) {
    cancelPicture();
  }
});

function renderBigPicture(event) {
  const imageSrc = event.target.attributes.src.value;
  const userObject = userObjects.find((userObj) => userObj.url === imageSrc);

  pictureImg.src = userObject.url;
  likesCount.textContent = userObject.likes;
  commentsCount.textContent = userObject.comments.length;
  pictureDescription.textContent = userObject.description;

  for (let i = 0; i < userObject.comments.length; i++) {
    const commentObj = userObject.comments[i];
    const commentTemp = commentsSection.children[i];
    const commentImg = commentTemp.children[0];
    const commentText = commentTemp.children[1];
    commentImg.src = commentObj.avatar;
    commentImg.alt = commentObj.name;
    commentText.textContent = commentObj.message;
  }
  commentsCountBlock.classList.add('hidden');
  loadCommentButton.classList.add('hidden');
  bigPictureSection.classList.remove('hidden');
  body.classList.add('modal-open');
}

function cancelPicture(){
  body.classList.remove('modal-open');
  bigPictureSection.classList.add('hidden');
}

export { renderBigPicture };
