import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

function AppContent() {
  const [activePage, setActivePage] = useState('Website Development');
  const { isDark } = useTheme();

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
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
