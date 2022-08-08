import { render, html } from '../node_modules/lit-html/lit-html.js';

const createArticleHandler = async (e) => {
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
    console.log(article);

};


const createTemplate = () => html`
    <form @submit=${createArticleHandler}>
        <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
        </div>
    
        <div>
            <label htmlFor="content">Content</label>
            <textarea name="content" id="" cols="30" rows="10"></textarea>
        </div>
    
        <div>
            <input type="submit" value="Create" />
        </div>
    
        <div>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" name="author" />
        </div>
    
    </form>
`

export const createView = (ctx) => {
    render(createTemplate(), document.getElementById('root'))
};