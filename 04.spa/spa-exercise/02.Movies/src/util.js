const views = [...document.querySelectorAll('.view-section')];

function hideAll() {
    views.forEach(v => v.style.display = 'none');
}

export function showView(section) {
    hideAll();
    section.style.display = 'block';
}

export function spinner() {
    const element = document.createElement('p');
    element.innerHTML = 'Loading &hellip;';

    return element;
}

export function updateNav() {
    const user = JSON.parse(localStorage.getItem('user'));
    const msgContainer = document.getElementById('welcome-msg');
    console.log(user);
    if (user) {
        document.querySelectorAll('.user').forEach(el => el.style.display = 'inline-block');
        document.querySelectorAll('.guest').forEach(el => el.style.display = 'none');
        msgContainer.textContent = `Welcome, ${user.email}`;
    } else {
        document.querySelectorAll('.user').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.guest').forEach(el => el.style.display = 'block');
        msgContainer.textContent = '';

    }
};
