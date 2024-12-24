const Matchmaking = require('../models/Matchmaking');

class MatchmakingService {
  static async findMatches(userId) {
    const matches = await Matchmaking.findMatchesForUser(userId);
    if (!matches) {
      throw new Error('No matches found');
    }
    return matches;
  }
}

module.exports = MatchmakingService;