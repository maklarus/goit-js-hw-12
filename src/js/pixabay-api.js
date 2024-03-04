// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import axios from 'axios';

import { renderImgs } from './render-functions';

const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');
const gallery = document.querySelector('.gallery');

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '42570593-7f6e60f401c84611dfc2b0674';
const searchParams = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
});

export async function fetchImgs(query, amount, page) {
  loader.classList.remove('is-hidden');

  try {
    const response = await axios.get(
      `?key=${API_KEY}&q=${query}&${searchParams}&per_page=${amount}&page=${page}`
    );

    const data = response.data;

    loadMoreBtn.classList.remove('is-hidden');

    if (!data.hits.length) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      renderImgs(data);
    }
  } catch (error) {
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: `Bad request`,
      position: 'topRight',
    });
  } finally {
    loader.classList.add('is-hidden');
  }
}
