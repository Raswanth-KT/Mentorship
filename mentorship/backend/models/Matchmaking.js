const db = require('../config/db');

class Matchmaking {
  /**
   * Find potential matches for a user based on skills and interests.
   * @param {number} userId 
   * @returns {Promise<Array>} 
   */
  static async findMatchesForUser(userId) {
    try {
      const [userProfile] = await db.execute(
        'SELECT skills, interests FROM profiles WHERE user_id = ?',
        [userId]
      );

      if (!userProfile.length) {
        throw new Error('User profile not found');
      }

      const { skills, interests } = userProfile[0];

      const [matches] = await db.execute(
        `SELECT users.id, users.name, profiles.skills, profiles.interests
         FROM users
         JOIN profiles ON users.id = profiles.user_id
         WHERE users.id != ?
         AND (profiles.skills LIKE ? OR profiles.interests LIKE ?)`,
        [userId, `%${skills}%`, `%${interests}%`]
      );

      return matches;
    } catch (error) {
      console.error('Error finding matches:', error);
      throw error;
    }
  }
}

module.exports = Matchmaking;