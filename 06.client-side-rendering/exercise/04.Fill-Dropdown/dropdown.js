import { html, render } from '../node_modules/lit-html/lit-html.js';

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
const form = document.querySelector('form');
form.addEventListener('submit', addItem);

async function getOptions() {
    const res = await fetch(url);
    const result = await res.json();
    return result;
}

const selectTemplate = (data) => html`
    <select id="menu">
        ${data.map(option => html`
        <option value=${option._id}>${option.text}</option>
        `)}
    </select>
`

const options = Object.values(await getOptions());
const container = document.querySelector('div');
update(options);
function update(options) {
    const result = selectTemplate(options);
    render(result, container);
}

async function addItem(e) {
    e.preventDefault();

    if (document.getElementById('itemText').value != '') {
        const text = document.getElementById('itemText').value;

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        })

        const data = await res.json();
        console.log(data);

        options.push(data);
        update(options);

    }

    document.getElementById('itemText').value = '';

}
