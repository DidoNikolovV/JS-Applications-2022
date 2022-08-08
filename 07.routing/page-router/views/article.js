import { render, html } from '../node_modules/lit-html/lit-html.js';


const articleTemplate = (article) => html`
    <article>
        <h1>${article.title}</h1>
    
        <main>
            ${article.content}
        </main>
    
        <footer>
            <p>Author: ${article.author}</p>
        </footer>
    </article>
`;

const fetchArticle = async (articleId) => {
    const res = await fetch(`http://localhost:3030/jsonstore/articles/${articleId - 1}`)
    const data = await res.json();
    return data;
};

export const articleView = async (ctx) => {
    const article = await fetchArticle(ctx.params.articleId)
    render(articleTemplate(article), document.querySelector('#root'));
};