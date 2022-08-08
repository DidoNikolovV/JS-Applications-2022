import page from '../node_modules/page/page.mjs'
import { render, html } from '../node_modules/lit-html/lit-html.js';

const createArticleHandler = async (ctx, e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const title = formData.get('title');
    const content = formData.get('content');
    const author = formData.get('author');

    const res = await fetch('http://localhost:3030/jsonstore/articles', {
        method: 'POSt',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content, author })
    })

    const article = await res.json();
    page.redirect(`/articles/${article._id}`);
};

const createTemplate = (ctx) => html`
    <form @submit=${createArticleHandler.bind({}, ctx)}>
        <div>
            <label for="title">Title</label>
            <input type="text" id="title" name="title" />
        </div>
    
        <div>
            <label for="content">Content</label>
            <textarea name="content" id="" cols="30" rows="10"></textarea>
        </div>
    
        <div>
            <input type="submit" value="Create" />
        </div>
    
        <div>
            <label for="author">Author</label>
            <input type="text" id="author" name="author" />
        </div>
    
    </form>
`

export const createView = (ctx) => {
    render(createTemplate(), document.getElementById('root'))
};