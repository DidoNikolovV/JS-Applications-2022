
const loader = document.getElementById('spinner');

function show() {
    loader.style.display = '';
}


function hide() {
    loader.style.display = 'none';
}

export function addLoader(ctx, next) {
    show();
    ctx.removeLoader = hide;
    next();
}