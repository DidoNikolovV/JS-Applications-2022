import { html } from '../../node_modules/lit-html/lit-html.js';

import * as movieService from '../services/movieService.js';
import { movieCardTemplate } from './templates/movieCardTemplate.js';

const homeTemplate = (movies) => html`

    <h1>Movie List</h1>
    <div class="movie-list">
        ${movies.map(m => movieCardTemplate(m))};
    </div>
`;

export const homeView = (ctx) => {
    let searchParams = new URLSearchParams(ctx.querystring);

    movieService.getAll(searchParams.get('search'))
        .then(movies => {
            // render(homeTemplate(movies), document.getElementById('root'))
            ctx.render(homeTemplate(movies));
        });
};