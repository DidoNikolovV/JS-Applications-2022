import { render, html } from '../node_modules/lit-html/lit-html.js';


const homeTemplate = () => html`
    <h1>Home</h1>
    <p>Welcome to our site</p>
`;

const root = document.getElementById('root');

export const homeView = (ctx) => {
    root.innerHTML = homeTemplate;
};
