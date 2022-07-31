import { showView } from './util.js';

const section = document.querySelector('#add-movie');
const form = section.querySelector('text-center.border.border-light.p-5');

export function createPage() {
    showView(section);
}