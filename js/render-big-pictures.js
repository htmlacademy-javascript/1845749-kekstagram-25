import { userObjects } from './render-miniatures.js';
const bigPictureSection = document.querySelector('.big-picture');
const pictureImg = document.querySelector('.big-picture__img').childNodes[1];
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const commentsSection = document.querySelector('.social__comments');
const pictureDescription = document.querySelector('.social__caption');
const commentsCountBlock = document.querySelector('.social__comment-count');
const loadCommentButton = document.querySelector('.comments-loader');
const cancelButton = document.getElementById('picture-cancel');
const body = document.getElementsByTagName('body')[0];
let userObject;

cancelButton.addEventListener('click', closePicture);
document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' ) {
    closePicture(bigPictureSection);
  }
});

loadCommentButton.addEventListener('click', showComments);

function renderBigPicture(event) {

  if (event.target.attributes.src) {
    // const imageSrc = event.target.attributes.src.value;
    // const userObject = userObjects.find((userObj) => userObj.url === imageSrc);
    userObject = getUserObj(event);
    pictureImg.src = userObject.url;
    likesCount.textContent = userObject.likes;
    pictureDescription.textContent = userObject.description;
    commentsCount.textContent = '12';
    resetCommentsCounter();
    renderComments(5);
    // renderComments(userObject);
    // commentsCountBlock.classList.add('hidden');
    // loadCommentButton.classList.add('hidden');
    bigPictureSection.classList.remove('hidden');
    body.classList.add('modal-open');
  }
}

function getUserObj(event) {
  const imageSrc = event.target.attributes.src.value;
  userObject = userObjects.find((userObj) => userObj.url === imageSrc);

  return userObject;
}

function renderComments(commentsNumber) {
  commentsCount.textContent = userObject.comments.length;

  const commentTemp = commentsSection.children[0];
  commentsSection.innerHTML = '';
  const commentsArr = [];

  for (let i = 0; i < commentsNumber; i++) {
    if (userObject.comments[i]) {
      const newComment = commentTemp.cloneNode(true);
      const commentObj = userObject.comments[i];
      const commentImg = newComment.children[0];
      const commentText = newComment.children[1];

      commentImg.src = commentObj.avatar;
      commentImg.alt = commentObj.name;
      commentText.textContent = commentObj.message;
      commentsArr.push(newComment);
      commentsSection.append(newComment);
    }
  }
}

function closePicture(){
  body.classList.remove('modal-open');
  bigPictureSection.classList.add('hidden');
}

function showComments() {

  const commentsCountString = commentsCountBlock.textContent;
  const shownComments = commentsCountString.match(/\d+/)[0];
  const commentsCounter = +shownComments + 5;

  if ((commentsCounter + 1) > +(commentsCount.textContent)) {
    renderComments(+(commentsCount.textContent));
    commentsCountBlock.textContent = commentsCountString.replace(shownComments, commentsCount.textContent);
    loadCommentButton.classList.add('hidden');
  } else {
    renderComments(commentsCounter);
    commentsCountBlock.textContent = commentsCountString.replace(shownComments, commentsCounter.toString());
  }
}

function resetCommentsCounter() {
  const commentsCountString = commentsCountBlock.textContent;
  const shownComments = commentsCountString.match(/\d+/)[0];
  commentsCountBlock.textContent = commentsCountString.replace(shownComments, '5');
  loadCommentButton.classList.remove('hidden');
}

export { renderBigPicture };
