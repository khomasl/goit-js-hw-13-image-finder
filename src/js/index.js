import axios from "axios";
import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';
import {notifyAlert, notifyError} from './notify.js';
import debounce from 'lodash/debounce';

import {renderForm,  renderGallery, loadMoreImages, renderedImagesList, renderedImageData} from './markup.js';
import { body, result } from "./refs.js";
import ImagesApiService from './apiService.js';
//import {showModal} from './modal.js';

renderForm()

const searchForm = document.querySelector("#search-form");
searchForm.addEventListener('submit', onSearchImages);

function btnVisible () {
  renderButton();
const btn = document.querySelector('.button');
btn.addEventListener('click', onLoadMoreImages);
}

const imagesApiService = new ImagesApiService();

function onSearchImages(evt){
    evt.preventDefault();
    imagesApiService.query = evt.currentTarget.elements.query.value.toLowerCase();
    
    imagesApiService.resetPage();

    imagesApiService.fetchImages()   
    .then(renderGallery)
    .catch(notifyAlert);

    //btnVisible();
//     const btn = document.querySelector('.button');
// btn.addEventListener('click', onLoadMoreImages);
}

function onLoadMoreImages (evt) {
  //evt.preventDefault();

  imagesApiService.fetchImages()
  .then(searchImages => {
    loadMoreImages(searchImages);

    btn.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    })    
  })
  .catch(notifyAlert);
}

// const photoCard = document.querySelector('.photo-card');
// photoCard.addEventListener('click', showModal);

// function showModal (evt) {
//     evt.preventDefault();
//     const currentImage = evt.currentTarget;
//     console.log('currentImage :>> ', currentImage);
//     const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `)

// instance.show();
// }