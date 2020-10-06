import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-240fd.firebaseio.com/'
});

export default instance;