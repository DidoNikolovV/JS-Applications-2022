import { html } from '../../node_modules/lit-html/lit-html.js';

import * as authService from '../services/authService.js';


const registerTemplate = (submitHandler) => html`
<section id="registerPage">
    <form @submit=${submitHandler} method="POST">
        <fieldset>
            <legend>Register</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <label for="conf-pass" class="vhide">Confirm Password:</label>
            <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

            <button type="submit" class="register">Register</button>

            <p class="field">
                <span>If you already have profile click <a href="#">here</a></span>
            </p>
        </fieldset>
    </form>
</section>
`

export const registerView = (ctx) => {
    async function submitHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        const { email, password, ['conf-pass']: repass } = Object.fromEntries(formData);
        try {
            if (email == '' || password == '' || repass == '') {
                throw new Error('All fields are required!');
            }

            if (password != confPass) {
                throw new Error('Passwords don\'t match');
            }

            await authService.register(email, password, repass);
            ctx.page.redirect('/');
        } catch (err) {
            alert(err);
        }

    }

    ctx.render(registerTemplate(submitHandler));
}