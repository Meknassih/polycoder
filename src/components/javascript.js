import javascript from './javascript.html';
import Component from '../lib/component';
import { minify } from 'terser';
import { format } from 'prettier/standalone';
import parser from 'prettier/parser-babel';

export default class JavascriptComponent extends Component {
    constructor() {
        super(javascript);
    }

    onInit() {
        this.inputPretty = document.querySelector('#input-pretty');
        this.inputUgly = document.querySelector('#input-ugly');
        this.buttonBeautify = document.querySelector('#btn-beautify');
        this.buttonMinify = document.querySelector('#btn-minify');
        this.textSizePretty = document.querySelector('#text-size-pretty');
        this.textSizeUgly = document.querySelector('#text-size-ugly');

        this.buttonMinify.addEventListener('click', event => {
            this.minify(this.inputPretty.value).then(minified => {
                this.inputUgly.value = minified.code;
                this.textSizeUgly.innerHTML = this.getTextSize(minified.code);
            });
        });
        this.buttonBeautify.addEventListener('click', event => {
            this.inputPretty.value = this.beautify(this.inputUgly.value);
        });
        this.inputPretty.addEventListener('input', event => {
            this.textSizePretty.innerHTML = this.getTextSize(this.inputPretty.value);
        });
        this.inputUgly.addEventListener('input', event => {
            this.textSizeUgly.innerHTML = this.getTextSize(this.inputUgly.value);
        });
    }

    minify(formatted) {
        return minify(formatted, {
            ecma: 2015,
            mangle: true,
            format: {
                comments: false
            },
            toplevel: true
        });
    }

    beautify(unformatted) {
        return format(unformatted, {
            singleQuote: true,
            parser: 'babel',
            plugins: [parser]
        });
    }

    getTextSize(text) {
        return text.length;
    }
}