import html from '../../../node_modules/lit-html/lit-html.js';

export const loader = () => html`
<div class="spinner-overlay">
    <div class="spinner-container">
        <div class="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</div>;
`

export const localOverlay = () => html`
    <div class="spinner-overlay local">
        <div class="spinner-container local">
            <div class="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>;
`

export function overlayElement(element) {
    const overlay = localOverlay();
    element.appendChild(overlay);
    return overlay;
}
