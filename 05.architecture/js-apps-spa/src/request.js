import { getToken } from './auth.js';


export const request = (method, url, data) => {
    let options = {};
    let token = getToken();

    if (method != 'GET') {
        options = {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    }

    if (token) {
        options.headers['X-Authorization'] = token;
    }

    return fetch(url, options)
        .then(res => res.json());
}

export const get = request.bind(null, 'GET');

export const post = request.bind(null, 'POST', data);