import { body, result } from "./refs.js";

export function renderForm () {
    const markup = createFormMarkup();
    body.insertAdjacentHTML('afterbegin', markup);
}
function renderButton () {
    const markup = `<button class="button">Load more</button>`;
    result.insertAdjacentHTML('afterend', markup);
}

export function renderGallery (images) {
    const markup = createGalleryMarkup(images);
    result.innerHTML = markup;
    
    renderButton ();
    const btn = document.querySelector('.button');
    btn.addEventListener('click', onLoadMoreImages);
}

export function loadMoreImages (images) {
    const gallery = document.querySelector(".gallery");

    const markup = addGalleryMarkup(images);
    gallery.insertAdjacentHTML('beforeend', markup);
}

const createFormMarkup = () => 
  `
    <form class="search-form" id="search-form">
        <input
        class="input"
        type="text"
        name="query"
        autocomplete="off"
        placeholder="Search images..."
        />
    </form>
  `

const addGalleryMarkup = (images) => images.map(image => `<li>${createCardImageMarkup (image)}</li>`).join('');

const createGalleryMarkup = (images) => `<ul class="gallery">${addGalleryMarkup (images)}</ul>`

function createCardImageMarkup (image) {
    return `
      <div class="photo-card">
        <img src="${image.webformatURL}" alt="${image.tags}" />
    
        <div class="stats">
            <p class="stats-item">
                <i class="material-icons">thumb_up</i>
                ${image.likes}
            </p>
            <p class="stats-item">
                <i class="material-icons">visibility</i>
                ${image.views}
            </p>
            <p class="stats-item">
                <i class="material-icons">comment</i>
                ${image.comments}
            </p>
            <p class="stats-item">
                <i class="material-icons">cloud_download</i>
                ${image.downloads}
            </p>
        </div>
      </div>
    `
}