import Navigo from 'navigo';
import Base64Component from './components/base64';
import UriComponent from './components/uri';
import JavascriptComponent from './components/javascript';

function setContent(content) {
    document.querySelector('#main-container').innerHTML = content;
};

function setActiveInNavbar(elementId) {
    document.querySelectorAll('.nav-link').forEach(navItem => navItem.classList.remove('active'));
    document.querySelector('.nav-link#' + elementId).classList.add('active');
}

const router = new Navigo();

// Routes declarations
router.on({
    'base64': function () {
        const comp = new Base64Component();
        setContent(comp.html);
        comp.onInit();
        setActiveInNavbar('link-base64');
    },
    'uri': function () {
        const comp = new UriComponent();
        setContent(comp.html);
        comp.onInit();
        setActiveInNavbar('link-uri');
    },
    'javascript': function () {
        const comp = new JavascriptComponent();
        setContent(comp.html);
        comp.onInit();
        setActiveInNavbar('link-javascript');
    },
});

// Default route
router.on(() => {
    const comp = new Base64Component();
    setContent(comp.html);
    comp.onInit();
});

export default router;