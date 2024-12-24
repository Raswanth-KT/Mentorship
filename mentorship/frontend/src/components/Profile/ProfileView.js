import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProfileView() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/profile', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error.response.data);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="profile-view-container">
      <h2>Your Profile</h2>
      <p><strong>Skills:</strong> {profile.skills}</p>
      <p><strong>Interests:</strong> {profile.interests}</p>
      <p><strong>Bio:</strong> {profile.bio}</p>
    </div>
  );
}

export default ProfileView;