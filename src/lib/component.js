export default class Component {
    constructor(html) {
        this.html = html;
        const wrapper = document.createElement('div');
        wrapper.innerHTML = html;
        this.element = wrapper.firstChild;
    }

    onInit() { }

    toString() {
        return this.element;
    }
}