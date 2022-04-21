import { getImages } from './getImages.js';
import { renderBigPicture } from './render-big-pictures.js';

const userObj = getImages();
const pictureTemplate = document.getElementById('picture');
const miniaturesContainer = document.querySelector('.pictures');
const pictureFragment = document.createDocumentFragment();

function renderPictures(userObjects) {
  miniaturesContainer.addEventListener ('click', renderBigPicture);

  userObjects.forEach((userObject) => {
    const miniatureLinkTemplate = pictureTemplate.content.cloneNode(true);
    const miniatureLink = miniatureLinkTemplate.children[0];
    const image = miniatureLink.querySelector('.picture__img');
    const picInfo = miniatureLink.querySelector('.picture__info');
    const likes = miniatureLink.querySelector('.picture__likes');
    const comments = miniatureLink.querySelector('.picture__comments');

    image.src = userObject.url;
    likes.textContent = userObject.likes;
    comments.textContent =  userObject.comments.length;

    picInfo.append(likes,comments);

    pictureFragment.append(image, picInfo);
    miniaturesContainer.append(pictureFragment);

  });

  return userObjects;
}

export { userObj, renderPictures };


