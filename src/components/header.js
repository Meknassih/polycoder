import header from './header.html';
import Component from '../lib/component';
import { Dropdown } from 'bootstrap';
import router from './../routes';

export default class HeaderComponent extends Component {
    constructor() {
        super(header, 'nav');
    }

    onInit() {
        this.element.querySelector('#link-base64').addEventListener('click', e => {
            e.preventDefault();
            router.navigate('/base64');
        });
        this.element.querySelector('#link-uri').addEventListener('click', e => {
            e.preventDefault();
            router.navigate('/uri');
        });
        this.element.querySelector('#link-javascript').addEventListener('click', e => {
            e.preventDefault();
            router.navigate('/javascript');
        });
        router.updatePageLinks();
    }
}