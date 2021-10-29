import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galeryElementsRefs = document.querySelector('.gallery');
 

const createGalleryItems = galleryItems
    .map(({ preview, original, description  }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}" data-lightbox="roadtrip">
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

let instance;

function hendleGalleryClick(event) {
  if (!event.target.classList.contains('gallery__item')) {
    return;
  }
  event.preventDefault();
  const getUrlImage = event.target.dataset.source;
  console.log(getUrlImage);
   
  
  instance = basicLightbox.create(`
    <div class="modal">
       <img width="1400" height="900"
       src="${imageSource}">
    </div>`,
    {
    onShow: instance => {
      window.addEventListener('keydown', onEscClick);
    },
  },
  {
    onClose: instance => {
      window.removeEventListener('keydown', onEscClick);
    },
    },
   function escKeyPress(event) {
      if (event.code === 'Escape') {
        modalWindow.close();
        closeModalWindow();
      }
    }
  );
  //   galeryElementsRefs.onclick = () => {
  //  const modalWindow = basicLightbox.create(`
  //   <div class="modal">
  //      <img width="1400" height="900"
  //      src="${imageSource}">
  //   </div>`,
  //   );
  //   modalWindow.show();

  //       window.addEventListener('keydown', escKeyPress);
  //     };
// }

// function closeModalWindow() {
//   window.removeEventListener('keydown', escKeyPress);
// }

    // function escKeyPress(event) {
    //   if (event.code === 'Escape') {
    //     modalWindow.close();
    //     closeModalWindow();
    //   }
    // }