---
to: src/components/<%= h.inflection.dasherize(name.toLowerCase()) %>.js
---
import <%= h.inflection.camelize(name, true) %> from './<%= h.inflection.dasherize(name.toLowerCase()) %>.html';
import Component from '../lib/component';

export default class <%= h.inflection.camelize(Name) %>Component extends Component {
    constructor() {
        super(<%= h.inflection.camelize(name, true) %>);
    }

    onInit() {}
}
