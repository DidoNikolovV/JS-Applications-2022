import { html } from '../../../node_modules/lit-html/lit-html.js';



export const movieCardTemplate = (movie) => html`

    <div class="card movie-card" style="width: 200px;">
        <img src=${movie.img} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${movie.description}</p>
            <a href="/movies/${movie._id}" class="btn btn-primary">Details</a>
        </div>
    </div>
`