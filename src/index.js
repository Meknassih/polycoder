import './styles.scss';
import './routes';
import Header from './components/header';
import RouterOutlet from './components/router-outlet';
import router from './routes';

// Base components to render on all pages
const components = [
    new Header(),
    new RouterOutlet()
];

components.forEach(component => {
    document.body.appendChild(component.element);
});

window.onload = () => {
    // Router outlet
    router.resolve();
    router.updatePageLinks();

    // Initialize components
    components.forEach(component => {
        component.onInit();
    });
};