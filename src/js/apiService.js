import {notifyAlert, notifyError} from './notify.js';
export default class ImagesApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.perPage = 12;
    }

    async fetchImages () {
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=${this.perPage}&key=23045990-a26bb8d890e0b5c9b60396550`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.page += 1;
            return data.hits;
        } 
        catch (error) {
            notifyAlert(error) ;
        }
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query (newQuery) {
        this.searchQuery = newQuery;
    }
}