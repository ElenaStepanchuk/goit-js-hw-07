import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galeryElementsRefs = document.querySelector('.gallery');
 

const createGalleryItems = galleryItems
    .map(({ preview, original, description  }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
  </a>
</div>`;
    })
    .join('');   
console.log(createGalleryItems);
galeryElementsRefs.insertAdjacentHTML('beforeend', createGalleryItems);
    
galeryElementsRefs.addEventListener('click', hendleGalleryClick);


function hendleGalleryClick(event) {
      if (!event.target.classList.contains('gallery__item'))
  {
    return;
      }
  event.preventDefault();
  const getUrlImage = event.target.dataset.source;
  console.log(getUrlImage);

}

