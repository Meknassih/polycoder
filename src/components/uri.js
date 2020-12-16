import uri from './uri.html';
import Component from '../lib/component';

export default class UriComponent extends Component {
    constructor() {
        super(uri);
    }

    onInit() {
        this.inputEncoded = document.querySelector('#input-encoded');
        this.inputDecoded = document.querySelector('#input-decoded');
        this.buttonEncode = document.querySelector('#btn-encode');
        this.buttonDecode = document.querySelector('#btn-decode');

        this.buttonDecode.addEventListener('click', event => {
            this.inputDecoded.value = this.uriDecode(this.inputEncoded.value);
        });
        this.buttonEncode.addEventListener('click', event => {
            this.inputEncoded.value = this.uriEncode(this.inputDecoded.value);
        });
    }

    uriDecode(encoded) {
        return decodeURI(encoded);
    }

    uriEncode(decoded) {
        return encodeURI(decoded);
    }
}