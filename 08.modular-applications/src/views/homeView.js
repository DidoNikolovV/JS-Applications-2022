import { render, html } from '../../node_modules/lit-html/lit-html.js';
import * as movieService from '../services/movieService.js';

const movieTemplate = (movie) => html`
    <div class="card movie-card" style="width: 200px;">
        <img src=${movie.img} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${movie.description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
`

const homeTemplate = (movies) => html`
    <h1>Movie List</h1>
    <div class="movie-list">
        ${movies.map(m => movieTemplate(m))};
    </div>
`;

export const homeView = (ctx) => {
    movieService.getAll()
        .then(movies => {
            render(homeTemplate(movies), document.getElementById('root'))
        });
};