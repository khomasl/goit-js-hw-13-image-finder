
import {notifyAlert} from './notify.js';
import {renderGallery, renderGalleryContainer, clearGalleryContainer, } from './markup.js';
import ImagesApiService from './apiService.js';
import {OnImageClick} from './modal.js';

let firstLoad = true;
const imagesApiService = new ImagesApiService();

export function onLoadImages(evt){
    evt.preventDefault();
    imagesApiService.query = evt.currentTarget.elements.query.value.toLowerCase();
    
    imagesApiService.resetPage();

    imagesApiService.fetchImages()   
    .then(searchImages => {
      firstLoad = true;
      clearGalleryContainer();
      renderGalleryContainer();
      renderGallery(searchImages);

      watchObserver();

      const gallery = document.querySelector(".gallery");
      gallery.addEventListener('click', OnImageClick);
    })
    .catch(notifyAlert);
}

export function onLoadMoreImages () {
    if (imagesApiService.page === 2 && firstLoad) {
        firstLoad = false;
        return;
     }

    imagesApiService.fetchImages()
    .then(renderGallery)
    .catch(notifyAlert);
}

export function watchObserver () {
  const intersection = document.querySelector('#intersection');  
  const options = {
    //root: body,
    rootMargin: '100px',
  }  
  const observer = new IntersectionObserver(onLoadMoreImages, options);
  //if (intersection.isIntersecting){
   observer.observe(intersection);
  //}
}