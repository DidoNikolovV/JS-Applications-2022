
// [ X ] improve HTML structure
// [ X ] create app.js module
// [ ? ] create router.js containg hide and display of view
//  [ X ] placeholders for all views


// [  ] implement views
// [  ] - create request logic
// [  ] - DOM manipulation logic

// [  ] catalog
// [  ] create
// [  ] login
// [  ] register
// [  ] create
// [  ] details
// [  ] like
// [  ] edit
// [  ] delete

// showView('#home-page');

import { homePage } from './home.js';
import { loginPage } from './login.js';
import { registerPage } from './register.js';
import { createPage } from './create.js';
import { updateNav } from './util.js';



const routes = {
    '/': homePage,
    '/login': loginPage,
    '/register': registerPage,
    '/logout': logout,
    '/create': createPage
};


document.querySelector('nav').addEventListener('click', onNavigate)
document.querySelector('#add-movie-button a').addEventListener('click', onNavigate);

function onNavigate(e) {

    if (e.target.tagName === 'A' && e.target.href) {
        e.preventDefault();
        const url = new URL(e.target.href);

        const view = routes[url.pathname];
        if (typeof view === 'function') {
            view();
        }
    }
}


function logout() {
    localStorage.removeItem('user');
    updateNav();
}

// Start application in catalog view
updateNav();
homePage();

