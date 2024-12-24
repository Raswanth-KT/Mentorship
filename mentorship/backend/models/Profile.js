const db = require('../config/db');

class Profile {
  static async findByUserId(userId) {
    try {
      const [rows] = await db.execute('SELECT * FROM profiles WHERE user_id = ?', [userId]);
      return rows[0];
    } catch (error) {
      throw new Error('Database query error');
    }
  }

  static async update(userId, { skills, interests, bio }) {
    try {
      const [result] = await db.execute(
        'UPDATE profiles SET skills = ?, interests = ?, bio = ? WHERE user_id = ?',
        [skills, interests, bio, userId]
      );
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error('Profile update failed');
    }
  }

  static async create(userId, { skills, interests, bio }) {
    try {
      const [result] = await db.execute(
        'INSERT INTO profiles (user_id, skills, interests, bio) VALUES (?, ?, ?, ?)',
        [userId, skills, interests, bio]
      );
      return result.insertId;
    } catch (error) {
      throw new Error('Profile creation failed');
    }
  }
}

module.exports = Profile;