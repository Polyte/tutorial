import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function AppContent() {
  const [activePage, setActivePage] = useState('Website Development');
  const { isDark } = useTheme();
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Login />;
  }

  return (
    <div className={`flex h-screen ${isDark ? 'bg-slate-900' : 'bg-gray-100'}`}>
      <div className="flex-shrink-0">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header activePage={activePage} />
        <div className="flex-1 overflow-x-hidden overflow-y-auto">
          <Dashboard activePage={activePage} />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
