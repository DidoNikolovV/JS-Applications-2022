import * as request from './requester.js';
const baseUrl = 'http://localhost:3030/data/likes';

export const getMovieLikes = (movieId) => {
    let query = encodeURIComponent(`movieId="${movieId}"`);
    let querystring = `where=${query}`;
    return request.get(`${baseUrl}?${querystring}`);
};

export const like = (movieId) => request.post(baseUrl, { movieId }) 
