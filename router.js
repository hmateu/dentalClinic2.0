const router = require('express').Router();
const authRoutes = require('./views/authRoutes');
const usersRoutes = require('./views/usersRoutes');

router.use('/auth', authRoutes);
router.use('/users', usersRoutes);

module.exports = router;