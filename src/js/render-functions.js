// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const instanse = new SimpleLightbox('.gallery a');

export function renderImgs({ hits }) {
  if (hits.length === 0) {
    gallery.innerHTML = '';
    return;
  }
  const galleryTemplate = hits
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

  gallery.innerHTML = galleryTemplate;

  instanse.refresh();
}
