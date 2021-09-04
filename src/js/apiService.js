import {notifyAlert} from './notify.js';

const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
const API_KEY = '23045990-a26bb8d890e0b5c9b60396550';
export default class ImagesApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.perPage = 12;
    }

    async fetchImages () {
        const url = `${BASE_URL}&q=${this.searchQuery}&page=${this.page}&per_page=${this.perPage}&key=${API_KEY}`;
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