import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const createCard = ({ preview, original, description }) => {
  return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}"">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
};

const galleryList = galleryItems.map((item) => createCard(item)).join("");

const divWrapper = document.querySelector(".gallery");
divWrapper.innerHTML = galleryList;

divWrapper.addEventListener("click", onGalleryItemClick);
const openedPicture = basicLightbox.create(
  `
<img src = ""> 
`, 
  {
    onShow: (instance) => {
      document.addEventListener("keydown", onEscapePress);
      console.log("added");
    },
  
    onClose: (instance) => {
      document.removeEventListener("keydown", onEscapePress);
      console.log("removed");
    },
  }
);

function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  openedPicture.element().querySelector("img").src =
    event.target.dataset.source;
  openedPicture.show();
}

function onEscapePress(event) {
  if (event.code === "Escape") {
    openedPicture.close();
    return;
  }
}
