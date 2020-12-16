import './styles.scss';
import './routes';
import HeaderComponent from './components/header';
import RouterOutletComponent from './components/router-outlet';
import router from './routes';

// Base components to render on all pages
const components = [
    new HeaderComponent(),
    new RouterOutletComponent()
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