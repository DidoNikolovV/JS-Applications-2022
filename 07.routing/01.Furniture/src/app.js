import { page, render } from './lib.js';
import { catalogPage } from './views/catalog.js';
import { registerPage } from './views/register.js';
import { loginPage } from './views/login.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { logout } from './api/data.js';
import { getUserData } from './util.js';


const root = document.querySelector('.container')
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', catalogPage);
page('/details/:id', detailsPage);
page('/register', registerPage);
page('/login', loginPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/my-furniture', catalogPage);

page.start();
updateUserNav();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root)
    ctx.updateUserNav = updateUserNav;

    next();
}

function updateUserNav() {
    const userdata = getUserData();
    if (userdata) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}

async function onLogout() {
    await logout();
    updateUserNav();
    page.redirect('/');
};