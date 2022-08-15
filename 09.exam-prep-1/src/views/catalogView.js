import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import * as albumService from '../services/albumService.js';

const catalogTemplate = (albums) => html`
<section id="catalogPage">
    <h1>All Albums</h1>

    ${albums.map(a => albumTemplate(a))}

    ${albums.length == 0 ? html`<p>No Albums in Catalog!</p>` : nothing}>


</section>
`

const albumTemplate = (album) => html`
    <div class="card-box">
        <img src=${album.imgUrl}>
        <div>
            <div class="text-center">
                <p class="name">Name: ${album.name}</p>
                <p class="artist">Artist: ${album.artist}</p>
                <p class="genre">Genre: ${album.genre}</p>
                <p class="price">Price: $${album.price}</p>
                <p class="date">Release Date: ${album.releaseDate}</p>
            </div>
            <div class="btn-group">
                <a href="/albums/${album._id}" id="details">Details</a>
            </div>
        </div>
    </div>
`

export async function catalogView(ctx) {
    const albums = await albumService.getAll();
    console.log(albums);

}