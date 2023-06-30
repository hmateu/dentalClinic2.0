const appointmentCreateController = require('../controllers/appointmentsControllers/appointmentCreateController');
const appointmentGetOnePatientController = require('../controllers/appointmentsControllers/appointmentGetOnePatientController');
const appointmentsGetAllController = require('../controllers/appointmentsControllers/appointmentsGetAll');
const appointmentsGetOneDentistController = require('../controllers/appointmentsControllers/appointmentsGetOneDentistController');
const isAdmin = require('../middlewares/isAdmin');
const isDentist = require('../middlewares/isDentist');
const auth = require('../middlewares/verifyToken');
const router = require('express').Router();

router.get('/', auth, isAdmin, appointmentsGetAllController.getAllAppointments);
router.get('/patient', auth, appointmentGetOnePatientController.getOnePatientAppointments);
router.get('/dentist', auth, appointmentsGetOneDentistController.getOneDentistAppointments);
router.post('/', auth, appointmentCreateController.createAppointment);

module.exports = router;