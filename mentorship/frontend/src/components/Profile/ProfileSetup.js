import React, { useState } from 'react';
import axios from 'axios';

function ProfileSetup() {
  const [skills, setSkills] = useState('');
  const [interests, setInterests] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('/api/profile', { skills, interests, bio }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log('Profile updated:', response.data);
    } catch (error) {
      console.error('Profile update error:', error.response.data);
    }
  };

  return (
    <div className="profile-setup-container">
      <h2>Set Up Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          required
        />
        <textarea
          placeholder="Interests"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          required
        />
        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        />
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}

export default ProfileSetup;