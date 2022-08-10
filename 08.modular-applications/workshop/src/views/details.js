import { html } from '../../node_modules/lit-html/lit-html.js';

const detailsTemplate = () => html`
<section id="details">
    <article>
        <h2>Grilled Duck Fillet</h2>
        <div class="band">
            <div class="thumb"><img src="/assets/roast.jpg"></div>
            <div class="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    <li>500 g Ingredient 1</li>
                    <li>3 tbsp Ingredient 2</li>
                    <li>2 cups Ingredient 3</li>
                </ul>
            </div>
        </div>
        <div class="description">
            <h3>Preparation:</h3>
            <p>Prepare ingredients</p>
            <p>Mix ingredients</p>
            <p>Cook until done</p>
        </div>
        <div class="controls">
            <a class="actionLink" href="/edit/8f414b4f-ab39-4d36-bedb-2ad69da9c830">&#x270e; Edit</a>
            <a class="actionLink" href="javascript:void(0)">&#x2716; Delete</a>
        </div>
    </article>
    <div>
        <div class="section-title">Comments for Grilled Duck Fillet</div>
        <article class="new-comment">
            <form><button class="button">Add comment</button></form>
        </article>

        <article class="new-comment">
            <h2>New comment</h2>
            <form id="commentForm">
                <textarea name="content" placeholder="Type comment"></textarea>
                <input type="submit" value="Add comment">
            </form>
        </article>

        <div class="comments">
            <ul>
                <li class="comment">
                    <header>peter@abv.bg</header>
                    <p>Great recipe!</p>
                </li>
            </ul>
        </div>
    </div>
</section>
`;

export function detailsPage(ctx) {
    ctx.render(detailsTemplate());
}