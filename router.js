const router = require('express').Router();
const authRoutes = require('./views/authRoutes');
const usersRoutes = require('./views/usersRoutes');
const appointmentRoutes = require('./views/appointmentsRoutes');
const treatmentsRoutes = require('./views/treatmentsRoutes');

router.use('/auth', authRoutes);
router.use('/users', usersRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/treatments', treatmentsRoutes);

module.exports = router;