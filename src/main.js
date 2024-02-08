import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const input = document.querySelector('.input');
const container = document.querySelector('.container');

form.addEventListener('submit', e => {
  e.preventDefault();
  const q = e.target.elements.input.value;
  const key = '42276910-5dbc0617c597b0712888fd711';

  findPhotos(key, q);

  e.target.reset();
});

function findPhotos(key, q) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const PARAMS = `?key=${key}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true`;
  const url = BASE_URL + END_POINT + PARAMS;

  return fetch(url)
    .then(res => res.json())
    .catch(error => {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    });
}
