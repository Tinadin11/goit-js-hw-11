import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getPictures } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";

const form = document.querySelector(".form-search");
const images = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const input = document.querySelector(".input-search");

loader.style.display = "none";

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

form.addEventListener("submit", searchPictures);

function searchPictures(event) {
  event.preventDefault();
  images.innerHTML = "";
  loader.style.display = "block";

  const inputValue = input.value.trim();
  if (!inputValue) {
    loader.style.display = "none";
    return iziToast.warning({
      title: "Caution",
      message: "Please complete the field!",
      position: "bottomRight",
    });
  }

  getPictures(inputValue)
    .then((data) => {
      loader.style.display = "none";

      if (!data.hits.length) {
        return iziToast.error({
          title: "Error",
          message:
            "Sorry, there are no images matching your search query. Please try again!",
          position: "bottomRight",
        });
      }

      images.innerHTML = createMarkup(data.hits);
      lightbox.refresh(); 

      setTimeout(() => {
        window.scrollBy({
          top: document.querySelector(".gallery-item").getBoundingClientRect()
            .height * 2,
          behavior: "smooth",
        });
      }, 500);

      form.reset();
    })
    .catch((error) => {
      loader.style.display = "none";
      console.error("Error", error);
      iziToast.error({
        title: "Error",
        message: "Sorry, something went wrong. This is an error!",
        position: "bottomRight",
      });
    })
    .finally(() => {
      loader.style.display = "none";
      input.value = "";
    });
}