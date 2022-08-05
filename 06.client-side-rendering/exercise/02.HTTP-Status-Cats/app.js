import { html, render } from '../node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

const root = document.getElementById('allCats');

const cardPreview = (data, showStatus) => html`
<ul>
    ${data.map(cat => html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn" @click=${showStatus}>Show status code</button>
            <div class="status" style="display: none" id="${cat.id}">
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>
    `)}
</ul>
`
update();

function showStatus(e) {
    const elementId = e.target.parentNode;
    console.log(elementId);
}

function update() {
    const result = cardPreview(cats);
    render(result, root);
}



