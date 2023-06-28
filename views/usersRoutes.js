const router = require('express').Router();
const userDeleteController = require('../controllers/usersControllers/userDeleteController');
const userGetOneController = require('../controllers/usersControllers/userGetOneController');
const usersGetAllControllers = require('../controllers/usersControllers/usersGetAllControllers');
const usersGetAllPatientsControllers = require('../controllers/usersControllers/usersGetAllPatientsControllers');
const isAdmin = require('../middlewares/isAdmin');
const isDentist = require('../middlewares/isDentist');
const auth = require('../middlewares/verifyToken');

// router.get('/', auth, isDentist, usersGetAllControllers.getAllUsers);
router.get('/', usersGetAllControllers.getAllUsers);
router.get('/perfil', auth, userGetOneController.getOneUser);
router.get('/patients', auth, usersGetAllPatientsControllers.getAllPatients);
router.delete('/:id', auth, isAdmin, userDeleteController.deleteOneUser);

module.exports = router;