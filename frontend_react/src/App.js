import React, { useState, useEffect } from 'react';
import './App.css';
import MyCards from './components/pages/MyCards';
import Profile from './components/pages/Profile';
import SettleNow from './components/pages/SettleNow';

// PUBLIC_INTERFACE
function App() {
  /**
   * Root App component enhanced with a lightweight router-less view switcher
   * to access the MyCards and Profile screens without adding external dependencies.
   */
  const [theme, setTheme] = useState('light');
  const [route, setRoute] = useState('home'); // 'home' | 'mycards' | 'profile' | 'settlenow'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const goHome = () => setRoute('home');
  const goMyCards = () => setRoute('mycards');
  const goProfile = () => setRoute('profile');
  const goSettleNow = () => setRoute('settlenow');

  const GlobalControls = ({ showBack = true }) => (
    <>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        style={{ position: 'fixed', zIndex: 20 }}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
      {showBack && (
        <div style={{ position: 'fixed', left: 16, bottom: 16, zIndex: 20 }}>
          <button
            onClick={goHome}
            style={{
              padding: '8px 12px',
              borderRadius: 8,
              border: '1px solid var(--border-color)',
              background: 'var(--bg-secondary)',
              cursor: 'pointer'
            }}
            aria-label="Back to Home"
            title="Back to Home"
          >
            ← Back
          </button>
        </div>
      )}
    </>
  );

  if (route === 'mycards') {
    return (
      <div className="App">
        <GlobalControls />
        <MyCards />
      </div>
    );
  }

  if (route === 'profile') {
    return (
      <div className="App">
        <GlobalControls />
        <Profile />
      </div>
    );
  }

  if (route === 'settlenow') {
    return (
      <div className="App">
        <GlobalControls />
        <SettleNow />
      </div>
    );
  }

  // Default "home" placeholder
  return (
    <div className="App">
      <header className="App-header">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <h1 style={{ marginBottom: 0 }}>React KAVIA Template</h1>
        <p style={{ marginTop: 8 }}>Current theme: <strong>{theme}</strong></p>
        <p style={{ maxWidth: 520 }}>
          This template includes the "My cards" and "Profile" screens converted from static HTML/CSS into modular React pages.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            onClick={goMyCards}
            style={{
              background: '#2563EB',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '10px 16px',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(37,99,235,0.25)'
            }}
          >
            Open “My cards” screen
          </button>
          <button
            onClick={goProfile}
            style={{
              background: '#42794a',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '10px 16px',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(66,121,74,0.25)'
            }}
          >
            Open “Profile” screen
          </button>
          <button
            onClick={goSettleNow}
            style={{
              background: '#0b6bcb',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '10px 16px',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(11,107,203,0.25)'
            }}
          >
            Open “Settle now” screen
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
