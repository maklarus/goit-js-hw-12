import 'izitoast/dist/css/iziToast.min.css';

import iziToast from 'izitoast';
import { fetchImgs } from './js/pixabay-api';

const searchForm = document.querySelector('form');
const searchInput = document.querySelector('input[name="search"]');
const loadMoreBtn = document.querySelector('.load-more');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let amount = 15;
let current_page;
let current_query;

function smoothScroll() {
  const galleryItemHeight =
    gallery.firstElementChild.getBoundingClientRect().height;

  window.scrollBy({
    top: 3 * galleryItemHeight,
    left: 0,
    behavior: 'smooth',
  });
}

function search(event) {
  event.preventDefault();
  gallery.innerHTML = null;

  const query = searchInput.value.trim();

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter text into the input field.',
      position: 'topRight',
    });
    return;
  }
  fetchImgs(query, amount, 1);

  current_query = query;
  current_page = 1;
}

searchForm.addEventListener('submit', search);

async function loadMoreContent() {
  current_page++;
  await fetchImgs(current_query, amount, current_page);
  // loadMoreBtn.scrollIntoView();

  // Чомусь не відпрацьовує плавний скролл (проблема поширена)
  smoothScroll();
}

loadMoreBtn.addEventListener('click', loadMoreContent);
