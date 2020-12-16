import base64 from './base64.html';
import Component from '../lib/component';
import './base64.scss';

export default class Base64 extends Component {
    constructor() {
        super(base64);
    }

    onInit() {
        this.inputEncoded = document.querySelector('#input-encoded');
        this.inputDecoded = document.querySelector('#input-decoded');
        this.buttonEncode = document.querySelector('#btn-encode');
        this.buttonDecode = document.querySelector('#btn-decode');

        this.buttonDecode.addEventListener('click', event => {
            this.inputDecoded.value = this.base64decode(this.inputEncoded.value);
        });
        this.buttonEncode.addEventListener('click', event => {
            this.inputEncoded.value = this.base64encode(this.inputDecoded.value);
        });
    }

    base64decode(encoded) {
        return atob(encoded);
    }

    base64encode(decoded) {
        return btoa(decoded);
    }
}