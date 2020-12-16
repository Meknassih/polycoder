export default class Component {
    constructor(html, tag = 'div') {
        this.html = html;
        this.element = document.createElement(tag);
        this.element.innerHTML = this.html;
    }

    onInit() { }

    toString() {
        return this.element;
    }
}