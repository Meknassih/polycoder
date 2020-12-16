import header from './header.html';
import Component from '../lib/component';
import { Dropdown } from 'bootstrap';
import router from './../routes';

export default class HeaderComponent extends Component {
    constructor() {
        super(header, 'nav');
    }

    onInit() {
        this.element.querySelector('#link-b64dec').addEventListener('click', e => {
            e.preventDefault();
            router.navigate('/base64decode');
        });
        router.updatePageLinks();
    }
}