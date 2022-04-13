const uploadFileInput = document.getElementById('upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.getElementsByTagName('body')[0];
const cancelButton = document.getElementById('upload-cancel');
// const submitPictureButton = document.querySelector('.img-upload__submit');

uploadFileInput.addEventListener('change', showModal);
// submitPictureButton.addEventListener('click', validate)
cancelButton.addEventListener('click', closePicture);
document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' ) {
    closePicture();
  }
});


function showModal() {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
}

function closePicture(){
  uploadFileInput.value='';
  body.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
}
