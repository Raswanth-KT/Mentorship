import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserDiscovery() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/discovery', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error.response.data);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="user-discovery-container">
      <h2>Discover Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Skills:</strong> {user.skills}</p>
            <p><strong>Interests:</strong> {user.interests}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserDiscovery;