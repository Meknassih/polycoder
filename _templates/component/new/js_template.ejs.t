---
to: src/components/<%= name.toLowerCase() %>.js
---
import <%= h.inflection.camelize(name, true) %> from './<%= name.toLowerCase() %>.html';
import Component from '../lib/component';

export default class <%= h.inflection.camelize(name) %>Component extends Component {
    constructor() {
        super(<%= h.inflection.camelize(name, true) %>);
    }

    onInit() {}
}
