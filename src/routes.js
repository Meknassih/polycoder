import Navigo from 'navigo';
import Base64Component from './components/base64';

function setContent(content) {
    document.querySelector('#main-container').innerHTML = content;
};

const router = new Navigo();

// Routes declarations
router.on({
    'base64': function () {
        const comp = new Base64Component();
        setContent(comp.html);
        comp.onInit();
    }
});

// Default route
router.on(() => {
    const comp = new Base64Component();
    setContent(comp.html);
    comp.onInit();
});

export default router;