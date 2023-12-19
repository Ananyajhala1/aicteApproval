const express = require('express');
const router = express.Router();
const notifcationController = require('../controllers/notificationController');
router.post('/scrutiny',notifcationController.handleScrutinyNotification );

module.exports = router;