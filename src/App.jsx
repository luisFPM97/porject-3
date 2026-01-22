import { useState } from 'react'
import './App.css'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext'
import useFetch from './hooks/useFetch'
import getRandomLocation from './utils/getRandomLocation'
import MainContent from './components/MainContent'
import LoginPage from './components/LoginPage'
import Header from './components/Header'

function AppContent() {
  const { user } = useAuth()
  const [inputValue, setInputValue] = useState(getRandomLocation())
  let url = `https://rickandmortyapi.com/api/location/${inputValue}`
  let [location, hasError, isLoading] = useFetch(url)

  const handleSearch = (value) => {
    if (value && value !== '0') {
      setInputValue(value)
    }
  }

  if (!user) {
    return <LoginPage />
  }

  return (
    <div className="app">
      <Header 
        onSearch={handleSearch} 
        searchPlaceholder="Search location by ID (1-126)"
      />
      
      <main className="app-main">
        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading location...</p>
          </div>
        ) : hasError || inputValue === '0' ? (
          <div className="error-container">
            <div className="error-icon">⚠️</div>
            <h2 className="error-title">Location not found</h2>
            <p className="error-message">Please provide a valid location ID from 1 to 126</p>
          </div>
        ) : (
          <MainContent location={location} />
        )}
      </main>
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App