import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProfileSetup from './components/Profile/ProfileSetup';
import ProfileView from './components/Profile/ProfileView';
import UserDiscovery from './components/Discovery/UserDiscovery';
import Matchmaking from './components/Matchmaking/Matchmaking';
import Notifications from './components/Notifications/Notifications';

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/profile-view" /> : <Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile-setup" element={user ? <ProfileSetup /> : <Navigate to="/" />} />
      <Route path="/profile-view" element={user ? <ProfileView /> : <Navigate to="/" />} />
      <Route path="/discovery" element={user ? <UserDiscovery /> : <Navigate to="/" />} />
      <Route path="/matchmaking" element={user ? <Matchmaking /> : <Navigate to="/" />} />
      <Route path="/notifications" element={user ? <Notifications /> : <Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;