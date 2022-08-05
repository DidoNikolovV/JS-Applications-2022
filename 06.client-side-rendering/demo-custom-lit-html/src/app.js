import { html, render } from '../node_modules/lit-html/lit-html.js';

const template = (items, styleClass, isDisabled) => html`
    <h1>Hello from Lit Html</h1>
    
    ${items.length == 0
       ? html`<p>No users</p>`
       : ''
    }
    
    <ul class=${styleClass}>
        ${items.map(x => html`<li>${x}</li>`)}
    </ul>
    <button ?disabled=${isDisabled} @click=${() => onClick()}>Add</button>
`;

const names = ['Pesho', 'Gosho', 'Stamat', 'Mariyka'];
const root = document.getElementById('root');

render(template(['Pesho', 'Gosho'], 'vertical', false), root);

function onClick() {
    names.push('Pesho - ' + Math.random());
    render(template(names, 'vertical', false), root);
}