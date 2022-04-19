/*eslint-disable*/
const uploadFileInput = document.getElementById('upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.getElementsByTagName('body')[0];
const cancelButton = document.getElementById('upload-cancel');
const imageInput = document.querySelector('.img-upload__input');
const defoultImage = document.querySelector('.img-upload__preview img');
const makeBiggerButton = document.querySelector('.scale__control--bigger');
const makeSmallerButton = document.querySelector('.scale__control--smaller');
const scaleInput = document.querySelector('.scale__control--value')
// const submitPictureButton = document.querySelector('.img-upload__submit');

uploadFileInput.addEventListener('change', showModal);
// submitPictureButton.addEventListener('click', validate)
cancelButton.addEventListener('click', closePicture);
document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' ) {
    closePicture();
  }
});

function showModal(event) {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  scaleInput.value = '100%';
  showImage()
  changeScale(100);
  makeBiggerButton.addEventListener('click', makeImageBigger)
  makeSmallerButton.addEventListener('click', makeImageSmaller)
}

function closePicture(){
  uploadFileInput.value='';
  body.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
}

function makeImageBigger() {
  makeSmallerButton.classList.remove('hidden')
  let value = parseInt(scaleInput.value) + 25;

  if (value > 100) {
    scaleInput.value = '100%';
    makeBiggerButton.classList.add('hidden')
    changeScale(100);
  } else {
    scaleInput.value = value + '%';
    changeScale(value);
  }
  console.log(scaleInput.value)
}

function makeImageSmaller() {
  makeBiggerButton.classList.remove('hidden');
  let value = parseInt(scaleInput.value) - 25;

  if (value <= 25) {
    scaleInput.value = '25%';
    makeSmallerButton.classList.add('hidden');
    changeScale(25)
  } else {
    scaleInput.value = value + '%';
    changeScale(value)
  }
  console.log(scaleInput.value)
}

function showImage() {
  let imgFile = imageInput.files[0];
  console.log('image upload ', imgFile)
  defoultImage.src = URL.createObjectURL(imgFile);
}

function changeScale(scaleValue) {
  defoultImage.style.transform = `scale(${scaleValue / 100})`;
}

