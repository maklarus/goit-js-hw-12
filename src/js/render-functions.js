import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';

const gallery = document.querySelector('.gallery');
const instanse = new SimpleLightbox('.gallery a');
const loadMoreBtn = document.querySelector('.load-more');

export function renderImgs(data) {
  if (data.hits.length === 0) {
    // gallery.innerHTML = '';
    return;
  }

  const galleryTemplate = data.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
      <li class="gallery-item">
        <a href="${largeImageURL}" class="gallery-link">
          <img src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="flex-style">
          <div class="p-style">
            <p class="p1">Likes</p>
            <p class="p2">${likes}</p>
          </div>
          <div class="p-style">
            <p class="p1">Views</p>
            <p class="p2">${views}</p>
          </div>
          <div class="p-style">
            <p class="p1">Comments</p>
            <p class="p2">${comments}</p>
          </div>
          <div class="p-style">
            <p class="p1">Downloads</p>
            <p class="p2">${downloads}</p>
          </div>
        </div>
      </li>`;
      }
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', galleryTemplate);

  if (gallery.childElementCount >= data.totalHits) {
    loadMoreBtn.classList.add('is-hidden');
    iziToast.info({
      message: `We're sorry, but you've reached the end of search results.`,
      position: 'topRight',
    });
  }

  console.log(gallery.firstElementChild.getBoundingClientRect().height);

  instanse.refresh();
}
