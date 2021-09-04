//import axios from "axios";
import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';
//import {notifyAlert} from './notify.js';
import {renderForm, renderIntersection,} from './markup.js';
import {onLoadImages, watchObserver} from './loadImages.js';

renderForm();
renderIntersection();
//renderGalleryContainer();

const searchForm = document.querySelector("#search-form");
searchForm.addEventListener('submit', onLoadImages);
// searchForm.addEventListener('submit', watchObserver);


