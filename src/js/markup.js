import { body } from "./refs.js";

// export function renderGalleryMarkup (images) {
export function renderGallery (images) {
    const markup = createGalleryMarkup(images);

    const gallery = document.querySelector(".gallery");
    gallery.insertAdjacentHTML('beforeend', markup);
}

export function renderForm () {
    body.insertAdjacentHTML('afterbegin', createFormMarkup);
}

export function renderGalleryContainer () {
    const markup = '<ul class="gallery"></ul>';
    renderMarkup(markup);
}

export function clearGalleryContainer () {
    const gallery = document.querySelector(".gallery");
    if (gallery) {body.removeChild(gallery)}  
}

export function renderIntersection () {
    const markup = `<div id="intersection"></div>`;
    renderMarkup(markup);
}

function renderMarkup(markup) {
    const searchForm = document.querySelector("#search-form");
    searchForm.insertAdjacentHTML('afterend', markup);
}

const createFormMarkup = 
  ` <form class="search-form" id="search-form">
        <input
        class="input"
        type="text"
        name="query"
        autocomplete="off"
        placeholder="Search images..."
        />
    </form>
  `;

const createGalleryMarkup = (images) => images.map(image => `<li>${createCardImageMarkup (image)}</li>`).join('');

function createCardImageMarkup (image) {
    return `
      <div class="photo-card">
        <img src="${image.webformatURL}" alt="${image.tags}" data-largeimage="${image.largeImageURL}"/>
    
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

