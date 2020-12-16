import Navigo from 'navigo';
import Base64Decode from './components/base64decode';

function setContent(content) {
    document.querySelector('#main-container').innerHTML = content;
};

const router = new Navigo();
router.on({
    'base64decode': function () {
        setContent(new Base64Decode().html);
    }
});
router.on(() => {
    setContent(new Base64Decode().html);
});

export default router;