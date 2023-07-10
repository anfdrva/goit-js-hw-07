import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector(".gallery");

list.insertAdjacentHTML('beforeend', createMarkUp(galleryItems));

list.onclick = (evt) => {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
}

list.addEventListener('click', heandlerClick);

function createMarkUp(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item js-item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('')
}

function heandlerClick(evt) {
    evt.preventDefault();
    if (evt.target.classList.contains('gallery__image')) {
        console.log(evt.target)
    }
    const instance = basicLightbox.create(`
    <img
      src="${evt.target.dataset.source}"
    />`);
    instance.show();
}

console.log(galleryItems);
