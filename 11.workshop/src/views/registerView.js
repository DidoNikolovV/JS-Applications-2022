import { html } from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js';

const registerTemplate = (registerHandler) => html`
    <div class="login-page">
        <h1>Register Page</h1>
    
        <form @submit=${registerHandler}>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Username</label>
                <input type="text" name="username" class="form-control" id="username">
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" name="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    </div>
   
`;

export const registerView = (ctx) => {
    const registerHandler = (e) => {
        e.preventDefault();
        let { username, email, password } = Object.fromEntries(new FormData(e.currentTarget));

        authService.register(username, email, password)
            .then(user => {
                ctx.page.redirect('/');
                console.log('User is registered');
            })
    };

    ctx.render(registerTemplate(registerHandler));
}
