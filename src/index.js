import _ from 'lodash';
import Header from './components/header';
import { Navbar } from 'bootstrap';
import './styles.scss';

const components = [
    new Header(),
];

components.forEach(component => {
    document.body.appendChild(component.render());
});
