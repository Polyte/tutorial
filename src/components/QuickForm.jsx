import { useState } from 'react';

const QuickForm = ({ type, onSubmit, onClose, isDark }) => {
    const [formData, setFormData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(type, formData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`${isDark ? 'bg-slate-800 text-white' : 'bg-white text-gray-900'} rounded-lg p-6 w-96`}>
                <h3 className="text-lg font-semibold mb-4">Add New {type}</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {type === 'client' && (
                        <>
                            <input
                                type="text"
                                placeholder="Client Name"
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className={`w-full px-3 py-2 border rounded ${isDark ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-300'}`}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className={`w-full px-3 py-2 border rounded ${isDark ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-300'}`}
                                required
                            />
                        </>
                    )}
                    {type === 'service' && (
                        <>
                            <input
                                type="text"
                                placeholder="Service Name"
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className={`w-full px-3 py-2 border rounded ${isDark ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-300'}`}
                                required
                            />
                            <input
                                type="number"
                                placeholder="Price"
                                onChange={(e) => setFormData({...formData, price: parseInt(e.target.value)})}
                                className={`w-full px-3 py-2 border rounded ${isDark ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-300'}`}
                                required
                            />
                            <textarea
                                placeholder="Description"
                                onChange={(e) => setFormData({...formData, description: e.target.value})}
                                className={`w-full px-3 py-2 border rounded ${isDark ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-300'}`}
                                required
                            />
                        </>
                    )}
                    {type === 'order' && (
                        <>
                            <select
                                onChange={(e) => setFormData({...formData, clientId: parseInt(e.target.value)})}
                                className={`w-full px-3 py-2 border rounded ${isDark ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-300'}`}
                                required
                            >
                                <option value="">Select Client</option>
                                <option value="1">Tech Corp</option>
                                <option value="2">StartupXYZ</option>
                            </select>
                            <select
                                onChange={(e) => setFormData({...formData, serviceId: parseInt(e.target.value)})}
                                className={`w-full px-3 py-2 border rounded ${isDark ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-300'}`}
                                required
                            >
                                <option value="">Select Service</option>
                                <option value="1">Web Development</option>
                                <option value="2">Mobile App</option>
                            </select>
                            <input
                                type="date"
                                onChange={(e) => setFormData({...formData, date: e.target.value, status: 'Pending'})}
                                className={`w-full px-3 py-2 border rounded ${isDark ? 'bg-slate-700 border-slate-600' : 'bg-white border-gray-300'}`}
                                required
                            />
                        </>
                    )}
                    <div className="flex justify-end space-x-3">
                        <button type="button" onClick={onClose} className={`px-4 py-2 rounded ${isDark ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gray-200 hover:bg-gray-300'}`}>
                            Cancel
                        </button>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Add {type}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default QuickForm;