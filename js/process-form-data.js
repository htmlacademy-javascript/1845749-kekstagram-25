const uploadFileInput = document.getElementById('upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.getElementsByTagName('body')[0];
const cancelButton = document.getElementById('upload-cancel');
const imageInput = document.querySelector('.img-upload__input');
const defaultImage = document.querySelector('.img-upload__preview img');
const makeBiggerButton = document.querySelector('.scale__control--bigger');
const makeSmallerButton = document.querySelector('.scale__control--smaller');
const scaleInput = document.querySelector('.scale__control--value');
const effectsList = document.querySelector('.effects__list');
const scaleBar = document.querySelector('.img-upload__effect-level');

uploadFileInput.addEventListener('change', showModal);
cancelButton.addEventListener('click', closePicture);
document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' ) {
    closePicture();
  }
});

effectsList.addEventListener('click', addEffect);

function showModal() {
  uploadOverlay.classList.remove('hidden');
  scaleBar.classList.add('hidden');
  body.classList.add('modal-open');
  scaleInput.value = '100%';
  showImage();
  changeScale(100);
  makeBiggerButton.addEventListener('click', makeImageBigger);
  makeSmallerButton.addEventListener('click', makeImageSmaller);
}

function closePicture(){
  uploadFileInput.value='';
  body.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
}

function makeImageBigger() {
  makeSmallerButton.classList.remove('hidden');
  const value = parseInt(scaleInput.value, 10) + 25;

  if (value >= 100) {
    scaleInput.value = '100%';
    makeBiggerButton.classList.add('hidden');
    changeScale(100);
  } else {
    scaleInput.value = `${value}%`;
    changeScale(value);
  }
}

function makeImageSmaller() {
  makeBiggerButton.classList.remove('hidden');
  const value = parseInt(scaleInput.value, 10) - 25;

  if (value <= 25) {
    scaleInput.value = '25%';
    makeSmallerButton.classList.add('hidden');
    changeScale(25);
  } else {
    scaleInput.value = `${value}%`;
    changeScale(value);
  }
}

function showImage() {
  const imgFile = imageInput.files[0];
  defaultImage.src = URL.createObjectURL(imgFile);
}

function changeScale(scaleValue) {
  defaultImage.style.transform = `scale(${scaleValue / 100})`;
}

function addEffect(event) {
  const effect = event.target.value;

  if (effect === 'none') {
    defaultImage.style.filter = 'none';
  }

  if (effect === 'chrome') {
    defaultImage.style.filter = 'grayscale(1)';
  }

  if (effect === 'sepia') {
    defaultImage.style.filter = 'sepia(1)';
  }

  if (effect === 'marvin') {
    defaultImage.style.filter = 'invert(100%)';
  }

  if (effect === 'phobos') {
    defaultImage.style.filter = 'blur(3px)';
  }
  if (effect === 'heat') {
    defaultImage.style.filter = 'brightness(3)';
  }
}
