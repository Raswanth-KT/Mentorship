const express = require('express');
const matchmakingController = require('../controllers/matchmakingController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/suggestions', authMiddleware, matchmakingController.suggestMatches);

module.exports = router;