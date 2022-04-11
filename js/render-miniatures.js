import { makeUserObjects } from "./data.js";

setTimeout(() => {

const userObjects = makeUserObjects(2);
console.log(userObjects)

const miniaturesContainer = document.querySelector('.pictures');
const imageTemplate = document.body.querySelector('.picture__img');
const likesTemplate = document.body.querySelector('.picture__likes');
const commentsTemplate = document.body.querySelector('.picture__comments');

console.log(miniaturesContainer, imageTemplate, likesTemplate, commentsTemplate)

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


console.log(miniaturesContainer);
})

}, 5000)
