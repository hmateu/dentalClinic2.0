const router = require('express').Router();
const userGetOneController = require('../controllers/usersControllers/userGetOneController');
const usersGetAllControllers = require('../controllers/usersControllers/usersGetAllControllers');
const isDentist = require('../middlewares/isDentist');
const auth = require('../middlewares/verifyToken');

// router.get('/', auth, isDentist, usersGetAllControllers.getAllUsers);
router.get('/', usersGetAllControllers.getAllUsers);
router.get('/perfil', auth, userGetOneController.getOneUser);

module.exports = router;