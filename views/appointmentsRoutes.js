const appointmentGetOnePatientController = require('../controllers/appointmentsControllers/appointmentGetOnePatientController');
const appointmentsGetAllController = require('../controllers/appointmentsControllers/appointmentsGetAll');
const auth = require('../middlewares/verifyToken');
const router = require('express').Router();

router.get('/', appointmentsGetAllController.getAllAppointments);
router.get('/patient', auth, appointmentGetOnePatientController.getOnePatientAppointments);

module.exports = router;