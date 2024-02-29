// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів

import { renderImgs } from './render-functions';

const API_URL = 'https://pixabay.com/api';
const API_KEY = '42570593-7f6e60f401c84611dfc2b0674';
const searchParams = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
});

const addLoader = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'inline-block';
};

export const fetchImgs = searchValue => {
  addLoader();
  setTimeout(function () {
    fetch(`${API_URL}/?key=${API_KEY}&q=${searchValue}&${searchParams}`)
      .then(r => r.json())
      .then(data => {
        if (!data.hits.length) {
          iziToast.error({
            title: 'Error',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
          return data;
        } else {
          return data;
        }
      })
      .then(renderImgs)
      .catch(error =>
        iziToast.error({
          title: 'Error',
          message: `Bad request`,
          position: 'topRight',
        })
      )
      .finally(() => {
        const loader = document.querySelector('.loader');
        loader.style.display = 'none';
      });
  }, 250);
};
