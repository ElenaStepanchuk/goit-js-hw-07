import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galeryElementsRefs = document.querySelector('.gallery');
 

const createGalleryItems = galleryItems
    .map(({ preview, original, description  }) => {
        return `<a class="gallery__item"
    href="${original}">
  <img class="gallery__image"
  src="${preview}"
  alt="${description}" />
</a>`;
    })
    .join('');   
console.log(createGalleryItems);

galeryElementsRefs.insertAdjacentHTML('beforeend', createGalleryItems);
    
galeryElementsRefs.addEventListener('click', hendleGalleryClick);