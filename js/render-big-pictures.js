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
const startCommentsLength = '2';

let userObject;
let userObjects;

export function getReadyBigPictureRender(objects) {
  userObjects = objects;
}

cancelButton.addEventListener('click', closePicture);
document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' ) {
    closePicture(bigPictureSection);
  }
});

loadCommentButton.addEventListener('click', showComments);

export function renderBigPicture(event) {

  if (event.target.attributes.src) {
    userObject = getUserObj(event);
    pictureImg.src = userObject.url;
    likesCount.textContent = userObject.likes;
    pictureDescription.textContent = userObject.description;

    resetCommentsCounter((userObject.comments.length).toString());
    renderComments(2);
    bigPictureSection.classList.remove('hidden');
    body.classList.add('modal-open');

    const commentsCountString = commentsCountBlock.textContent;
    const commentNumbers = commentsCountString.match(/\d+/g);
    const shownComments = commentNumbers[0];
    const firstRep = commentsCountString.replace(shownComments, startCommentsLength);
    commentsCountBlock.textContent = firstRep;
  }
}

function getUserObj(event) {
  const imageSrc = event.target.attributes.src.value;
  userObject = userObjects.find((userObj) => userObj.url === imageSrc);

  return userObject;
}

function renderComments(commentsNumber) {

  commentsCount.textContent = commentsNumber;
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
  const commentNumbers = commentsCountString.match(/\d+/g);
  const shownComments = commentNumbers[0];
  const commentsCounter = +shownComments + 2;

  if ((commentsCounter + 1) > +(commentNumbers[1])) {
    renderComments(+(commentNumbers[1]));
    commentsCountBlock.textContent = commentsCountString.replace(shownComments, commentNumbers[1]);
    loadCommentButton.classList.add('hidden');
  } else {
    renderComments(commentsCounter);
    commentsCountBlock.textContent = commentsCountString.replace(shownComments, commentsCounter.toString());
  }
}

function resetCommentsCounter(commCount) {
  const commentsCountString = commentsCountBlock.textContent;
  const commentNumbers = commentsCountString.match(/\d+/g);
  commentsCountBlock.textContent = commentsCountString.replace(commentNumbers[1], commCount);
  loadCommentButton.classList.remove('hidden');
}

