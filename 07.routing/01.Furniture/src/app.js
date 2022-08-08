import { page, render } from './lib.js';
import { catalogPage } from './views/catalog.js';
import { registerPage } from './views/register.js';
import { loginPage } from './views/login.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import * as api from './api/data.js';



const root = document.querySelector('.container')

page(decorateContext);
page('/', catalogPage);
page('/details/:id', detailsPage);
page('/register', registerPage);
page('/login', loginPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/my-furniture', catalogPage);

page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root)

    next();
}