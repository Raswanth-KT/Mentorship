const Profile = require('../models/Profile');

class ProfileService {
  static async getUserProfile(userId) {
    const profile = await Profile.findByUserId(userId);
    if (!profile) {
      throw new Error('Profile not found');
    }
    return profile;
  }

  static async updateUserProfile(userId, { skills, interests, bio }) {
    const updated = await Profile.update(userId, { skills, interests, bio });
    if (!updated) {
      throw new Error('Profile update failed');
    }
    return updated;
  }
}

module.exports = ProfileService;