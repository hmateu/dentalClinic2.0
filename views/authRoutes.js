const authRegisterController = require('../controllers/authRegisterController');

const router = require('express').Router();

router.post('/register', authRegisterController.register);

module.exports = router;