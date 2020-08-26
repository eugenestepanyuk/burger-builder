import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-34c5a.firebaseio.com/'
});

export default instance;