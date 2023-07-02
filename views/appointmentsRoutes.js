const appointmentCreateController = require('../controllers/appointmentsControllers/appointmentCreateController');
const appointmentGetOneController = require('../controllers/appointmentsControllers/appointmentGetOneController');
const appointmentGetOnePatientController = require('../controllers/appointmentsControllers/appointmentGetOnePatientController');
const appointmentUpdateByPatientController = require('../controllers/appointmentsControllers/appointmentUpdateByPatientController');
const appointmentsGetAllController = require('../controllers/appointmentsControllers/appointmentsGetAll');
const appointmentsGetOneDentistController = require('../controllers/appointmentsControllers/appointmentsGetOneDentistController');
const isAdmin = require('../middlewares/isAdmin');
const auth = require('../middlewares/verifyToken');
const router = require('express').Router();

router.get('/', auth, isAdmin, appointmentsGetAllController.getAllAppointments);
router.get('/patient', auth, appointmentGetOnePatientController.getOnePatientAppointments);
router.get('/dentist', auth, appointmentsGetOneDentistController.getOneDentistAppointments);
router.post('/', auth, appointmentCreateController.createAppointment);
router.get('/:id', auth, appointmentGetOneController.getOneAppointment);
router.put('/:id', auth, appointmentUpdateByPatientController.updateAppointmentByPatient);

module.exports = router;