const appointmentGetOnePatientController = require('../controllers/appointmentsControllers/appointmentGetOnePatientController');
const appointmentsGetAllController = require('../controllers/appointmentsControllers/appointmentsGetAll');
const appointmentsGetOneDentistController = require('../controllers/appointmentsControllers/appointmentsGetOneDentistController');
const auth = require('../middlewares/verifyToken');
const router = require('express').Router();

router.get('/', appointmentsGetAllController.getAllAppointments);
router.get('/patient', auth, appointmentGetOnePatientController.getOnePatientAppointments);
router.get('/dentist', auth, appointmentsGetOneDentistController.getOneDentistAppointments);

module.exports = router;