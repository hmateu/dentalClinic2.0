const authLoginController = require('../controllers/authControllers/authLoginController');
const authRegisterController = require('../controllers/authControllers/authRegisterController');

const router = require('express').Router();

router.post('/register', authRegisterController.register);
router.post('/login', authLoginController.login);

module.exports = router;