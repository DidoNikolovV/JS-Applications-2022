import { navbarTemplate } from './templates/navbar.js';
import { contactListTemplate } from './templates/contactList.js';
import { getContacts } from './api.js';
import render from './render.js';

const rootElement = document.getElementById('root');

const navbarTemplateResult = navbarTemplate();

render(navbarTemplateResult, rootElement);

const contacts = await getContacts();
render(contactListTemplate(contacts), rootElement);
