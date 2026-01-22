import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const generateNickname = () => {
  const adjectives = ['Happy', 'Lucky', 'Clever', 'Brave', 'Swift', 'Bright', 'Cosmic', 'Epic'];
  const nouns = ['Explorer', 'Traveler', 'Seeker', 'Hunter', 'Wanderer', 'Voyager', 'Adventurer', 'Navigator'];
  const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomNum = Math.floor(Math.random() * 999);
  return `${randomAdj}${randomNoun}${randomNum}`;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = (name, nickname = '') => {
    const finalNickname = nickname.trim() || generateNickname();
    const newUser = {
      name: name.trim(),
      nickname: finalNickname,
      initials: name.trim().split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
