import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/data/movies';
const PAGE_SIZE = 2;


export const getAll = (search, page) => {
    let query = [];
    if (search) {
        query.push('?where=' + encodeURIComponent(`title LIKE "${search}"`));
    }

    if (page) {
        query.push(`offset=${(page - 1) * PAGE_SIZE}`);
        query.push(`pageSize=${PAGE_SIZE}`);
    }

    let querystring = query.length ? `?${query.join('&')}` : '';

    return fetch(baseUrl + querystring).then(res => res.json());
};

export const getCount = () => request.get(`${baseUrl}?count`);

export const getOne = (movieId) => {
    return fetch(`${baseUrl}/${movieId}`).then(res => res.json());
};

