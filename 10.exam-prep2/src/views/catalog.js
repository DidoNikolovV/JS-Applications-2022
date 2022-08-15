import { html } from '../../node_modules/lit-html/lit-html.js';

const catalogTemplate = () => html`
<section id="catalog-page">
    <h1>All Games</h1>
    <!-- Display div: with information about every game (if any) -->
    <div class="allGames">
        <div class="allGames-info">
            <img src="./images/avatar-1.jpg">
            <h6>Action</h6>
            <h2>Cover Fire</h2>
            <a href="#" class="details-button">Details</a>
        </div>

    </div>
    <div class="allGames">
        <div class="allGames-info">
            <img src="./images/avatar-1.jpg">
            <h6>Action</h6>
            <h2>Zombie lang</h2>
            <a href="#" class="details-button">Details</a>
        </div>

    </div>
    <div class="allGames">
        <div class="allGames-info">
            <img src="./images/avatar-1.jpg">
            <h6>Action</h6>
            <h2>MineCraft</h2>
            <a href="#" class="details-button">Details</a>
        </div>
    </div>

    <!-- Display paragraph: If there is no games  -->
    <h3 class="no-articles">No articles yet</h3>
</section>
`

// const gameTemplate = (game) => html`
//     <div class="game">
//         <div class="image-wrap">
//             <img src=${game.imgUrl}>
//         </div>
//         <h3>${game.title}</h3>
//         <div class="rating">
//             <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
//         </div>
//         <div class="data-buttons">
//             <a href="#" class="btn details-btn">Details</a>
//         </div>
//     </div>
// `

export function catalogView(ctx) {
    ctx.render(catalogTemplate());
}