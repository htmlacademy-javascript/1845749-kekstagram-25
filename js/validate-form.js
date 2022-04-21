// /*eslint-disable*/
import { onSubmit } from './upload.js';

const MAX_TAGS = 5;
const MAX_TAG_SYMBOL = 20;
const TAGS_REGEXP = /^#[A-Za-zА-Яа-яЕё0-9]+$/;
const MAX_DESK_SYMBOL = 140;

const uploadForm = document.querySelector('.img-upload__form');
const uploadTagsImput = uploadForm.querySelector('.text__hashtags');
const uploadDescription = uploadForm.querySelector('.text__description');

const pristine = new Pristine(uploadForm, {
  classTo: 'text__label',
  errorClass: 'text__label--invalid',
  successClass: 'text__label--valid',
  errorTextParent: 'text__label',
  errorTextTag: 'div',
  errorTextClass: 'text__error-message'
});

uploadForm.addEventListener('submit', onSubmit);

function makeTagsArr() {
  const tagsString = (uploadTagsImput.value).toLowerCase();
  const tagsArr = tagsString.split(' ');

  return tagsArr;
}

function makeNoDubsTagsArr() {
  const tagsArr = makeTagsArr();
  const tagsSat = new Set(tagsArr);
  const uniqueTagsArr = Array.from(tagsSat);

  return uniqueTagsArr;
}

function checkDublicates() {
  const tagsArr = makeTagsArr();
  const uniqueTagsArr = makeNoDubsTagsArr();
  const noDublicates = (tagsArr.length === uniqueTagsArr.length);

  return noDublicates;
}

function tagsAreValidRegExp() {
  const tags = makeNoDubsTagsArr();
  const result = tags.every((tag) => tag.match(TAGS_REGEXP));

  return result;
}

function checkTagsLength() {
  const tags = makeNoDubsTagsArr();
  const result = tags.every((tag) => (tag.length <= MAX_TAG_SYMBOL));

  return result;
}

function checkTagsCount() {
  const tagsArr = makeTagsArr();
  const tagsRightLength = (tagsArr.length <= MAX_TAGS);

  return tagsRightLength;
}

function checkDescriptionLength() {
  const description = uploadDescription.value.length;
  const lengthIsCorrect = (description <= MAX_DESK_SYMBOL);

  return lengthIsCorrect;
}

pristine.addValidator(uploadTagsImput, checkDublicates, 'Хэштеги не должны повторяться');
pristine.addValidator(uploadTagsImput, tagsAreValidRegExp, 'Хэштеги содержат недопустимые символы. Хэштег должен содержать только буквы и цифры');
pristine.addValidator(uploadTagsImput, checkTagsCount, 'Хэштегов не должно быть больше 5');
pristine.addValidator(uploadTagsImput, checkTagsLength, 'Длина хэштегов не должна быть больше 20 символов');
pristine.addValidator(uploadDescription, checkDescriptionLength, 'Длина описания не может привышать 140 символов');

uploadTagsImput.addEventListener('keydown', (e) => {if (e.code === 'Escape') {e.stopPropagation();}});
uploadDescription.addEventListener('keydown', (e) => {if (e.code === 'Escape') {e.stopPropagation();}});

export { uploadForm, pristine };
