import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3cb311403a712cf07837368271a5c150dfa9ce047f968f6ca3fc84b7a36555e5'
    }
});