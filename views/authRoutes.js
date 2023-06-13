const authRegisterController = require('../controllers/authRegister/authRegisterController');

const router = require('express').Router();

router.post('/register', authRegisterController.register);

module.exports = router;