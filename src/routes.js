import Navigo from 'navigo';
import Base64Component from './components/base64';

function setContent(content) {
    document.querySelector('#main-container').innerHTML = content;
};

const router = new Navigo();
router.on({
    'base64': function () {
        setContent(new Base64Component().html);
    }
});
router.on(() => {
    setContent(new Base64Component().html);
});

export default router;