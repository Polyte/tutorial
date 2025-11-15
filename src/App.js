import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  const [activePage, setActivePage] = useState('Website Development');

  return (
    <div className="flex h-screen bg-slate-900">
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

export default App;
