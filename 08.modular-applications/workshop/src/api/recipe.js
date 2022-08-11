import * as api from './api.js';

const endpoints = {
    recipes: '/data/recipes',
    recent: '/data/recipes?select=_id%2Cname%2Cimg&sortBy=_createdOn%20desc&pageSize=3'
};

export async function getRecent() {
    return api.get(endpoints.recent);
}

export async function getAll() {
    return api.get(endpoints.recipes);
}

