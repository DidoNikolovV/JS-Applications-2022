import { render, html } from '../../node_modules/lit-html/lit-html.js';
import { navigationTemplate } from '../views/navigationView.js';
const root = document.getElementById('root');
const ctxRender = (ctx, templateResult) => {
    let layout = html`
        <nav>
            ${navigationTemplate(ctx)}
        </nav>
        
        <main>
            ${templateResult}
        </main>
        
        <footer class="footer">
            <p>All rights reserved &copy; SoftUni 2022</p>
        </footer>
    `;

    render(layout, root)
};

export const renderMiddleware = (ctx, next) => {
    ctx.render = ctxRender.bind(null, ctx);

    next();
};