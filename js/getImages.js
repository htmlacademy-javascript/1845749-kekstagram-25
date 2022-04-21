import { renderPictures } from './render-miniatures.js';
import { getReadyBigPictureRender } from './render-big-pictures.js';
let userObj;

function getImages() {
  const URL_GET = 'https://25.javascript.pages.academy/kekstagram/data';
  fetch(URL_GET)
    .then((response) => response.json())
    .then((response) => renderPictures(response))
    .then((objects) => getReadyBigPictureRender(objects))
    .catch((err) => {
      throw new Error(err.message);
    });
}

export { getImages, userObj};
