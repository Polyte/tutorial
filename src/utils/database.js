// Mock database operations for demo purposes
const mockData = {
  users: [
    { id: 1, email: 'admin@billingflow.dev', password: 'admin123', name: 'BillingFlow Admin' }
  ],
  clients: [
    { id: 1, name: 'Tech Corp', email: 'contact@techcorp.com', projects: 3 },
    { id: 2, name: 'StartupXYZ', email: 'hello@startupxyz.com', projects: 1 }
  ],
  services: [
    { id: 1, name: 'Web Development', price: 5000, description: 'Full-stack development' },
    { id: 2, name: 'Mobile App', price: 8000, description: 'Native mobile applications' }
  ],
  orders: [
    { id: 1, clientId: 1, serviceId: 1, status: 'In Progress', date: '2024-01-15' },
    { id: 2, clientId: 2, serviceId: 2, status: 'Completed', date: '2024-01-10' }
  ],
  meetings: []
};

export const db = {
  // Auth
  login: (email, password) => {
    const user = mockData.users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      return { success: true, user };
    }
    return { success: false, error: 'Invalid credentials' };
  },

  logout: () => {
    localStorage.removeItem('user');
    return { success: true };
  },

  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  // Clients
  getClients: () => mockData.clients,
  addClient: (client) => {
    const newClient = { ...client, id: Date.now() };
    mockData.clients.push(newClient);
    return newClient;
  },

  // Services
  getServices: () => mockData.services,
  addService: (service) => {
    const newService = { ...service, id: Date.now() };
    mockData.services.push(newService);
    return newService;
  },

  // Orders
  getOrders: () => mockData.orders,
  addOrder: (order) => {
    const newOrder = { ...order, id: Date.now() };
    mockData.orders.push(newOrder);
    return newOrder;
  },

  // Meetings
  getMeetings: () => mockData.meetings,
  addMeeting: (meeting) => {
    const newMeeting = { ...meeting, id: Date.now() };
    mockData.meetings.push(newMeeting);
    return newMeeting;
  }
};