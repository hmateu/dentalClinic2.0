const treatmentsGetAllControllers = require('../controllers/treatmentsControllers/treatmentsGetAllControllers');

const router = require('express').Router();

router.get('/', treatmentsGetAllControllers.getAlltreatments);

module.exports = router;