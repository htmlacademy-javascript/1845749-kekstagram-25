import { makeUserObjects } from './data.js';

const userObjects = makeUserObjects(2);
const miniaturesContainer = document.querySelector('.pictures');
const imageTemplate = document.body.querySelector('.picture__img');
const likesTemplate = document.body.querySelector('.picture__likes');
const commentsTemplate = document.body.querySelector('.picture__comments');

const pictureFragment = document.createDocumentFragment();

userObjects.forEach((userObject) => {
  let image;
  let likes;
  let comments;
  if (imageTemplate) {
    image = imageTemplate.cloneNode(true);
    image.src = userObject.url;
  }
  if (likesTemplate) {
    likes = likesTemplate.cloneNode(true);
    likes.textContent = userObject.likes;
  }
  if (commentsTemplate) {
    comments = commentsTemplate.cloneNode(true);
    comments.textContent = (userObject.comments).length;
  }

  pictureFragment.append(image, likes, comments);
  miniaturesContainer.append(pictureFragment);

});


