const authRegisterController = require('../controllers/authControllers/authRegisterController');

const router = require('express').Router();

router.post('/register', authRegisterController.register);

module.exports = router;