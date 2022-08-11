import { html } from '../../node_modules/lit-html/lit-html.js';
import * as recipeService from '../api/recipe.js';

const catalogTemplate = (recipes) => html`
    <section id="catalog">
        <div class="section-title">
            <form id="searchForm">
                <input type="text" name="search" value="">
                <input type="submit" value="Search">
            </form>
        </div>
    
        <header class="section-title">
            Page 2 of 3
            <a class="pager" href="/catalog/1">&lt; Prev</a>
            <a class="pager" href="/catalog/3">Next &gt;</a>
        </header>
    
        ${recipes.map(previewTemplate)}
    
        <footer class="section-title">
            Page 2 of 3
            <a class="pager" href="/catalog/1">&lt; Prev</a>
            <a class="pager" href="/catalog/3">Next &gt;</a>
        </footer>
    
    </section>
`;

const previewTemplate = (recipe) => html`
    <a class="card" href="/catalog/${recipe._id}">
        <article class="preview">
            <div class="title">
                <h2>${recipe.name}</h2>
            </div>
            <div class="small"><img src=${recipe.img}></div>
        </article>
    </a>
`
export async function catalogPage(ctx) {
    const recipes = await recipeService.getRecent();
    ctx.render(catalogTemplate(recipes));
}