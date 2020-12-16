export default class Component {
    constructor(html) {
        this.html = html;
    }

    render() {
        const element = document.createElement('div');
        element.innerHTML = this.html;
        return element;
    }
}