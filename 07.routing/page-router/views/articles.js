import { render, html } from '../node_modules/lit-html/lit-html.js';

const articleTemplate = (article) => html`
    <article>
        <h3>${article.title}</h3>
    
        <footer>
            <p>Author: ${article.author}</p>
            <a href="/articles/${article.id}">Read More...</a>
        </footer>
    </article>

`

const articlesTemplate = (articles) => html`
    <h1>Articles</h1>
    ${articles.map(a => html`${articleTemplate(a)}`)}
`;

const root = document.getElementById('root');

const getArticles = async () => {
    const res = await fetch('http://localhost:3030/jsonstore/articles');
    const data = await res.json();
    return Object.values(data);
}

export const articlesView = (ctx) => {
    getArticles()
        .then(articles => {
            // root.innerHTML = articlesTemplate(articles)
            render(articlesTemplate(articles), root)
        })
};