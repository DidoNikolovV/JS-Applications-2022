import { register } from '../api/users.js';

const section = document.getElementById('registerPage');
const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

let ctx = null;

export function showRegister(context) {
    ctx = context;
    context.showSection(section);
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    await register(email, password);
    ctx.updateNav();

    ctx.goTo('/');
}