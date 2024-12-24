const Profile = require('../models/Profile');

exports.getProfile = async (req, res) => {
  const userId = req.userId;
  try {
    const profile = await Profile.findByUserId(userId);
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve profile', error: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  const userId = req.userId;
  const { skills, interests, bio } = req.body;
  try {
    const updatedProfile = await Profile.update(userId, { skills, interests, bio });
    res.json({ message: 'Profile updated successfully', profile: updatedProfile });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update profile', error: error.message });
  }
};