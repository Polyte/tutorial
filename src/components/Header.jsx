import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Header = ({ activePage }) => {
  const { isDark, toggleTheme } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications] = useState([
    { id: 1, message: 'New order received', time: '2 min ago', unread: true },
    { id: 2, message: 'Build pipeline completed', time: '5 min ago', unread: true },
    { id: 3, message: 'Client payment processed', time: '1 hour ago', unread: false }
  ]);
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`${isDark ? 'bg-slate-900 text-white border-slate-700' : 'bg-white text-gray-900 border-gray-200'} px-6 py-4 border-b`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className={`flex items-center ${isDark ? 'bg-slate-800' : 'bg-gray-100'} rounded-lg px-3 py-2 w-64`}>
            <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search clients"
              className={`bg-transparent ${isDark ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'} focus:outline-none w-full`}
            />
          </div>
          
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center">
            <span className="mr-2">+</span>
            New Order
          </button>
          
          <button className={`${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'} px-4 py-2 rounded-lg text-sm font-medium flex items-center`}>
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Scheduler
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative" ref={notificationRef}>
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-gray-400 hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 7h6m0 10v-3M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3M9 7H6a1 1 0 00-1 1v9a1 1 0 001 1h3" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {notifications.filter(n => n.unread).length}
              </span>
            </button>
            
            {showNotifications && (
              <div className={`absolute right-0 mt-2 w-80 ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border rounded-lg shadow-lg z-50`}>
                <div className={`p-4 border-b ${isDark ? 'border-slate-700' : 'border-gray-200'}`}>
                  <h3 className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Notifications</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div key={notification.id} className={`p-4 border-b ${isDark ? 'border-slate-700 hover:bg-slate-700' : 'border-gray-200 hover:bg-gray-50'} ${notification.unread ? (isDark ? 'bg-slate-750' : 'bg-blue-50') : ''}`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className={`text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{notification.message}</p>
                          <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                        </div>
                        {notification.unread && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-1"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className={`p-3 border-t ${isDark ? 'border-slate-700' : 'border-gray-200'}`}>
                  <button className="text-xs text-blue-400 hover:text-blue-300">View all notifications</button>
                </div>
              </div>
            )}
          </div>
          
          <div className="text-right">
            <div className="text-xs text-gray-400">UTILIZATION</div>
            <div className="text-sm font-medium">68%</div>
          </div>
          
          <button onClick={toggleTheme} className="p-1 text-gray-400 hover:text-white">
            {isDark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
              BA
            </div>
            <div>
              <div className="text-sm font-medium">BillingFlow Admin</div>
              <div className="text-xs text-gray-400">admin@billingflow.dev</div>
            </div>
            <button className="text-gray-400 hover:text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;