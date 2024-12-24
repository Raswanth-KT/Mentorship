const db = require('../config/db');

class Connection {
  static async createConnection(mentorId, menteeId) {
    try {
      const [result] = await db.execute(
        'INSERT INTO connections (mentor_id, mentee_id) VALUES (?, ?)',
        [mentorId, menteeId]
      );
      return result.insertId;
    } catch (error) {
      throw new Error('Connection creation failed');
    }
  }

  static async findConnectionsByUserId(userId) {
    try {
      const [rows] = await db.execute(
        `SELECT * FROM connections WHERE mentor_id = ? OR mentee_id = ?`,
        [userId, userId]
      );
      return rows;
    } catch (error) {
      throw new Error('Database query error');
    }
  }
}

module.exports = Connection;