import { galleryItems } from './gallery-items.js';
// Change code below this line
const divBoxParentEl = document.querySelector('.gallery');

const galleryMarkup = createGallaryMarkup(galleryItems);
divBoxParentEl.insertAdjacentHTML('beforeend', galleryMarkup);

divBoxParentEl.addEventListener('click', handleImageClick);

function createGallaryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
     <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a> `;
    })
    .join('');
}
const instance = basicLightbox.create(`<img src = ""/>`, {
  onShow: instance => {
    window.addEventListener('keydown', closeModalbyEsc);
  },
  onClose: instance => {
    window.removeEventListener('keydown', closeModalbyEsc);
  },
});

function handleImageClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  instance.element().querySelector('img').src = event.target.dataset.source;

  instance.show();
}

function closeModalbyEsc(event) {
  console.log(event.key);
  if (event.key === 'Escape') {
    instance.close();
  }
}
