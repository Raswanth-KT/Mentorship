import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Matchmaking() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get('/api/matchmaking/suggestions', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setMatches(response.data);
      } catch (error) {
        console.error('Error fetching matches:', error.response.data);
      }
    };
    fetchMatches();
  }, []);

  return (
    <div className="matchmaking-container">
      <h2>Suggested Matches</h2>
      <ul>
        {matches.map(match => (
          <li key={match.id}>
            <p><strong>Name:</strong> {match.name}</p>
            <p><strong>Skills:</strong> {match.skills}</p>
            <p><strong>Interests:</strong> {match.interests}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Matchmaking;