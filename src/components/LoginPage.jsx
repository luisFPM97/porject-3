import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import './styles/loginPage.css';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      login(name, nickname);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <img src="/img/icon.png" alt="Logo" className="login-logo" />
          <h1 className="login-title">Rick and Morty Explorer</h1>
          <p className="login-subtitle">Sign in to explore the multiverse</p>
        </div>
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              className="form-input"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="nickname">Nickname (optional)</label>
            <input
              id="nickname"
              type="text"
              className="form-input"
              placeholder="Choose a nickname or leave empty for auto-generation"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>
          
          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>
        
        <p className="login-footer">
          No password required. Your data is stored locally.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
