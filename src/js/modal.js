 import * as basicLightbox from 'basiclightbox';
 import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';

 export function OnImageClick(event) {
    if (event.target.nodeName !== "IMG") return;

    const largeImgURL = event.target.dataset.largeimage;

    const markup = 
    `<div class="modal">
       <img width="1200" src="${largeImgURL}">
     </div>
    `;

    basicLightbox
    .create(markup)
    .show()
}