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

function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const shownPicture = showPicture(event.target.dataset.source);

  if (shownPicture.visible()) {
    document.addEventListener("keydown", onEscapePress);
    console.log("added");
  }

  //* Знаю що цей метод потрібно винести за межі "onGalleryItemClick" але не знаю як тоді отримати доступ до "shownPicture".

  function onEscapePress(event) {
    if (event.code === "Escape") {
      shownPicture.close(); //!Не знаю як передати цій функції showPicture якщо винести її за межі методу "onGalleryItemClick"
    }
  }
  function showPicture(source) {
    const openedPicture = basicLightbox.create(
      `
    <img src = "${source}">
    `,
      {
        onClose: (instance) => {
          document.removeEventListener("keydown", onEscapePress);
          console.log("removed");
        },
      }
    );
    openedPicture.show();
    return openedPicture;
  }
}
