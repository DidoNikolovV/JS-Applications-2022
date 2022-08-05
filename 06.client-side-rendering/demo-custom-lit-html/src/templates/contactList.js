import { contactTemplate } from './contact.js';

export const contactListTemplate = (contacts) => `
    <div class="contact-list" style="display: flex; justify-content: space-around;">
        ${contacts.map(c => contactTemplate(c)).join('')}
    </div>
`
    ;