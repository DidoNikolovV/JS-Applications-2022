// import * as api from './api/users.js';

import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showCatalog } from './views/catalog.js';
import { showRegister } from './views/register.js';
import { showDetails } from './views/details.js';
import { showCreate } from './views/create.js';

const main = document.querySelector('main');

document.getElementById('views').remove();

document.querySelector('nav').addEventListener('click', onNavigate);

const links = {
    '/': showHome,
    '/catalog': showCatalog,
    '/login': showLogin,
    '/register': showRegister,
    '/details': showDetails,
    '/create': showCreate
};

const context = {
    showSection,
    goto
};

// Start application in home view
goto('/');

function showSection(section) {
    main.replaceChildren(section);
};

function onNavigate(e) {
    let target = e.target;
    if (target.tagName == 'IMG') {
        target = target.parentElement;
    }

    if (target.tagName == 'A') {
        e.preventDefault();

        const url = new URL(e.target.href);
        goto(url.pathname)
    }
}

function goto(name) {
    const handler = links[name];
    if (typeof (handler) == 'function') {
        handler(context);
    }
}



