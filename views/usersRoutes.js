const router = require('express').Router();
const usersGetAllControllers = require('../controllers/usersControllers/usersGetAllControllers');
const isDentist = require('../middlewares/isDentist');
const auth = require('../middlewares/verifyToken');

router.get('/', auth, isDentist, usersGetAllControllers.getAllUsers);

module.exports = router;