import { html, render } from '../node_modules/lit-html/lit-html.js';

const template = () => html`
    <h1>Hello from Lit Html</h1>
    <ul>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
    </ul>
`;

const root = document.getElementById('root');

render(template(), root);