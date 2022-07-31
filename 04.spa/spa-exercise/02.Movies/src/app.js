import { showView } from './router.js';

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

const routes = {
    '/': homePage,
    '/login': loginPage,
    '/register': registerPage,
    '/logout': logoutPage,
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

const homeSection = document.querySelector('#home-page');
const loginSection = document.querySelector('#form-login');
const registerSection = document.querySelector('#form-sign-up');
const createSection = document.querySelector('#add-movie');
const detailsSection = document.querySelector('#add-movie');
const editSection = document.querySelector('#add-movie');

function homePage() {
    showView(homeSection);
}

function loginPage() {
    showView(loginSection);
}
function registerPage() {
    showView(registerSection);
}
function createPage() {
    showView(createSection);
}

function detailsPage() {
    showView(detailsSection);
}

function editPage() {
    showView(editSection);
}

function logoutPage() {
    alert('logged out');
}

// Start application in catalog view
homePage();

