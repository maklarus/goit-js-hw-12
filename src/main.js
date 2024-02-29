import 'izitoast/dist/css/iziToast.min.css';

import iziToast from 'izitoast';
import { fetchImgs } from './js/pixabay-api';

const searchForm = document.querySelector('form');
const searchInput = document.querySelector('input[name="search"]');

function search(event) {
  event.preventDefault();
  if (searchInput.value.trim() === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter text into the input field.',
      position: 'topRight',
    });
    return;
  }
  fetchImgs(searchInput.value.trim());
}

searchForm.addEventListener('submit', search);
