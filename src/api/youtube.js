import axios from 'axios';
const KEY = 'AIzaSyAFCMbtpqwjvP4TP_Nb6QMCy5MqKJQvwHE';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});