import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const input = document.querySelector('.input');
const container = document.querySelector('.container');

function findPhotos(q) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const PARAMS = `${q}`;
  const url = BASE_URL + END_POINT + PARAMS;

  const options = {
    key: '42276910-5dbc0617c597b0712888fd711',
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  return fetch(url, options)
    .then(res => res.json())
    .catch(error => {}
      iziToast.error({ message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      })
    );
}

findPhotos('cat');
