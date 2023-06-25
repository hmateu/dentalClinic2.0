const servicesGetAllControllers = require('../controllers/servicesControllers/servicesGetAllControllers');

const router = require('express').Router();

router.get('/', servicesGetAllControllers.getAllservices);

module.exports = router;