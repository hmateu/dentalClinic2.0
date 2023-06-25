const router = require('express').Router();
const authRoutes = require('./views/authRoutes');
const usersRoutes = require('./views/usersRoutes');
const appointmentRoutes = require('./views/appointmentsRoutes')

router.use('/auth', authRoutes);
router.use('/users', usersRoutes);
router.use('/appointments', appointmentRoutes);

module.exports = router;