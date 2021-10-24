import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galeryElementsRefs = document.querySelector('.gallery');
 
galeryElementsRefs.insertAdjacentHTML('beforeend', createGalleryItems);

function createGalleryItems(gallery) {
  return gallery
    .map(({ element, index }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${element.original}">
    <img class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      data-index="${index}"
      alt="${element.description}"/>
  </a>
</div>`;
    })
    .join('');   
}

    


