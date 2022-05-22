import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryItemsEl = galleryItems ;

console.log(galleryItemsEl)

const markup = galleryItemsEl.map(({ preview, original, description }) => {
   return `<div class="gallery__item">
  <a class="gallery__link" href="${original}" pointer-events = "none">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`}).join("");

console.log(markup);

galleryEl.insertAdjacentHTML("afterbegin", markup);

// library

const onGalleryClick = (e) => {
    e.preventDefault();
    if (!e.target.classList.contains("gallery__image")) {
        return;
    } else {
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">`);

        instance.show();
    };
    
}
galleryEl.addEventListener("click", onGalleryClick)

// console.log(galleryItems);