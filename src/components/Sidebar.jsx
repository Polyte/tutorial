import { useTheme } from '../contexts/ThemeContext';

const Sidebar = ({ activePage, setActivePage }) => {
  const { isDark } = useTheme();

  const operationsItems = [
    { name: 'Clients', icon: '👥' },
    { name: 'Services', icon: '🛠️' },
    { name: 'Orders', icon: '📋' }
  ];

  const solutionsItems = [
    { name: 'Hosting', icon: '🌐' },
    { name: 'Domains', icon: '🔗' },
    { name: 'Website Design', icon: '🎨' },
    { name: 'Website Development', icon: '</>' },
    { name: 'SEO & ASO (AI)', icon: '🚀' },
    { name: 'AI Automation', icon: '🤖' }
  ];

  return (
    <div className={`w-64 ${isDark ? 'bg-slate-900 text-white' : 'bg-white text-gray-900 border-r border-gray-200'} flex flex-col h-screen`}>
      <div className="p-6">
        <h2 className="text-xl font-bold">BillingFlow</h2>
        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wide`}>HOSTING PORTAL</p>
      </div>
      
      <div className="flex-1 px-4">
        <div className="mb-8">
          <h3 className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wide mb-4 px-2`}>OPERATIONS</h3>
          <nav className="space-y-1">
            {operationsItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActivePage(item.name)}
                className={`flex items-center px-3 py-2 text-sm rounded-lg transition-colors w-full text-left ${
                  activePage === item.name
                    ? 'bg-blue-600 text-white'
                    : isDark ? 'hover:bg-slate-800' : 'hover:bg-gray-100'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        <div>
          <h3 className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wide mb-4 px-2`}>SOLUTIONS</h3>
          <nav className="space-y-1">
            {solutionsItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActivePage(item.name)}
                className={`flex items-center px-3 py-2 text-sm rounded-lg transition-colors w-full text-left ${
                  activePage === item.name
                    ? 'bg-blue-600 text-white'
                    : isDark ? 'hover:bg-slate-800' : 'hover:bg-gray-100'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
      
      <div className={`p-4 text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
        © 2025 BillingFlow. All rights reserved.
      </div>
    </div>
  );
};

export default Sidebar;