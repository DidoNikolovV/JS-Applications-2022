const homeTemplate = () => `
    <h1>Home</h1>
    <p>Welcome to our site</p>
`;

const articlesTemplate = () => `
    <h1>Articles</h1>
    <p>Here is some of our most intersting articles</p>
`;

const aboutTemplate = () => `
    <h1>About</h1>
    <p>Here is some information about us</p>
`;

const routes = {
    '#home': homeTemplate,
    '#articles': articlesTemplate,
    '#about': aboutTemplate,
};

const root = document.getElementById('root');

window.addEventListener('hashchange', (e) => {
    let template = routes[location.hash];
    root.innerHTML = template()
});