const Matchmaking = require('../models/Matchmaking.js');

exports.suggestMatches = async (req, res) => {
  const userId = req.userId;
  try {
    const matches = await Matchmaking.findMatchesForUser(userId);
    res.json(matches);
  } catch (error) {
    res.status(500).json({ message: 'Failed to find matches', error: error.message });
  }
};