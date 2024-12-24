const db = require('../config/db');

class User {
  static async findByEmail(email) {
    try {
      const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
      return rows[0];
    } catch (error) {
      throw new Error('Database query error');
    }
  }

  static async create({ name, email, password }) {
    try {
      const [result] = await db.execute(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [name, email, password]
      );
      return result.insertId;
    } catch (error) {
      throw new Error('User creation failed');
    }
  }
}

module.exports = User;