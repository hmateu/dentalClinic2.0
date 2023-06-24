const router = require('express').Router();
const usersGetAllControllers = require('../controllers/usersControllers/usersGetAllControllers');

router.get('/', usersGetAllControllers.getAllUsers);

module.exports = router;