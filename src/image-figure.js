class ImageFigure extends HTMLAnchorElement {
    constructor() {
        super();

        this.innerHTML = 'Halo, nama saya image-figure';
    }
}

customElements.define('image-figure', ImageFigure);