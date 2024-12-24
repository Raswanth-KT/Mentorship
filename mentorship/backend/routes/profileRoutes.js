const express = require('express');
const profileController = require('../controllers/profileController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, profileController.getProfile);

router.put('/', authMiddleware, profileController.updateProfile);

module.exports = router;