import { html } from '../../node_modules/lit-html/lit-html.js';
import * as movieService from '../services/movieService.js';
import * as likeService from '../services/likeService.js';

const movieTemplate = (movie, onLike) => html`
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src=${movie.img} class="img-fluid rounded-start" alt=${movie.title}>
            </div>
            <div classs="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">${movie.description}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    <button @click=${()=> onLike(movie)} class="btn btn-primary">Like</button>
                    <span>Likes: ${movie.likes}</span>
                </div>
            </div>
        </div>
    </div>
`;


export const movieView = async (ctx) => {
    let movieId = ctx.params.movieId;
    const onLike = (movie) => {
        likeService.like(movie._id)
            .then(() => {
                ctx.page.redirect(`/movies/${movie._id}`);
            });
    }
    let movie = await movieService.getOne(movieId);
    let likes = await likeService.getMovieLikes(movieId);

    movie.likes = likes.length;

    ctx.render(movieTemplate(movie, onLike))

}


