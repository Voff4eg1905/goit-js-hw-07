import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const createCard = ({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
      `;
  };
  
  const galleryList = galleryItems.map((item) => createCard(item)).join("");
  
  const divWrapper = document.querySelector(".gallery");
divWrapper.innerHTML = galleryList;
  
  divWrapper.addEventListener("click", onGalleryItemClick);

  function onGalleryItemClick (event) {
    event.preventDefault();
        if (event.target.nodeName !== "IMG") {
        return;
    }
    console.log(event.target.alt);
    let lightbox = new SimpleLightbox('.gallery a', { captionSelector: 'img', captionType: "attr",  captionsData: "alt", captionDelay: 250});

 }

 