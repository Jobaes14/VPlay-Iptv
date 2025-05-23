
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginScreen } from './components/LoginScreen';
import { Dashboard } from './components/Dashboard';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for saved login state (e.g., from localStorage)
    const storedLoginState = localStorage.getItem('vplay_iptv_loggedin');
    if (storedLoginState === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    localStorage.setItem('vplay_iptv_loggedin', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('vplay_iptv_loggedin');
    setIsLoggedIn(false);
  };

  return (
    <HashRouter>
      <Routes>
        {!isLoggedIn && (
          <Route path="/login" element={<LoginScreen onLoginSuccess={handleLoginSuccess} />} />
        )}
        {isLoggedIn && (
          <Route path="/*" element={<Dashboard onLogout={handleLogout} />} />
        )}
        <Route 
          path="*" 
          element={<Navigate to={isLoggedIn ? "/home" : "/login"} replace />} 
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
