const appointmentsGetAllController = require('../controllers/appointmentsControllers/appointmentsGetAll');
const router = require('express').Router();

router.get('/', appointmentsGetAllController.getAllAppointments);

module.exports = router;