import { useTheme } from '../contexts/ThemeContext';

const Dashboard = ({ activePage }) => {
    const { isDark } = useTheme();
    const getPageContent = () => {
        switch(activePage) {
            case 'Clients':
                return {
                    title: 'Clients',
                    description: 'Manage your client relationships and project portfolios.',
                    buttonText: 'Add New Client',
                    tracks: [
                        { title: 'Active Projects', description: '12 ongoing projects across 8 clients', icon: '📊' },
                        { title: 'Client Communications', description: 'Slack, email, and video call integrations', icon: '💬' },
                        { title: 'Billing & Invoicing', description: 'Automated billing cycles and payment tracking', icon: '💳' },
                        { title: 'Project Analytics', description: 'Performance metrics and client satisfaction scores', icon: '📈' }
                    ]
                };
            case 'Services':
                return {
                    title: 'Services',
                    description: 'Configure and manage your service offerings and pricing tiers.',
                    buttonText: 'Create New Service',
                    tracks: [
                        { title: 'Web Development', description: 'Full-stack development services with modern frameworks', icon: '🌐' },
                        { title: 'Cloud Infrastructure', description: 'AWS, Azure, and GCP deployment and management', icon: '☁️' },
                        { title: 'Mobile Applications', description: 'Native and cross-platform mobile development', icon: '📱' },
                        { title: 'Consulting Services', description: 'Technical consulting and architecture planning', icon: '🎯' }
                    ]
                };
            case 'Orders':
                return {
                    title: 'Orders',
                    description: 'Track project orders, deliverables, and completion status.',
                    buttonText: 'Create New Order',
                    tracks: [
                        { title: 'Pending Orders', description: '5 orders awaiting client approval and kickoff', icon: '⏳' },
                        { title: 'In Progress', description: '8 active orders in various development stages', icon: '🚀' },
                        { title: 'Completed Orders', description: '23 successfully delivered projects this quarter', icon: '✅' },
                        { title: 'Order Analytics', description: 'Revenue tracking and delivery performance metrics', icon: '📊' }
                    ]
                };
            default:
                return {
                    title: 'Website Development',
                    description: 'Full-stack engineering delivery with CI/CD, observability, and scalability baked in.',
                    buttonText: 'Launch Build Pipeline',
                    tracks: [
                        { title: 'Frontend Platforms', description: 'React, Next.js, and Astro accelerators with design system integration and testing suites.', icon: '⚛️' },
                        { title: 'Backend Services', description: 'Node, Python, and Go microservices with GraphQL/REST APIs, monitoring, and scaling playbooks.', icon: '🔧' },
                        { title: 'DevOps & CI/CD', description: 'GitOps pipelines, container orchestration, and infrastructure-as-code starters.', icon: '🔄' },
                        { title: 'Performance Engineering', description: 'Core Web Vitals improvements, caching strategy, and synthetic monitoring baked in.', icon: '⚡' }
                    ]
                };
        }
    };

    const content = getPageContent();


    return (
        <div className={`${isDark ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'} min-h-full p-8`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">{content.title}</h1>
                        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{content.description}</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        {content.buttonText}
                    </button>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{activePage === 'Website Development' ? 'Engineering Tracks' : 'Overview'}</h2>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6`}>{activePage === 'Website Development' ? 'Compose reliable digital products backed by automation.' : `Manage your ${activePage.toLowerCase()} efficiently with these tools.`}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {content.tracks.map((track, index) => (
                            <div key={index} className={`${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} rounded-xl p-6 border`}>
                                <div className="flex items-start space-x-4">
                                    <div className="text-2xl">{track.icon}</div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">{track.title}</h3>
                                        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm leading-relaxed`}>{track.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;