import { render, html } from '../node_modules/lit-html/lit-html.js';


const aboutTemplate = () => html`
<h1>About</h1>
<p>Here is some information about us</p>
`;

const root = document.getElementById('root');


export const aboutView = (ctx) => {
    root.innerHTML = aboutTemplate;
};