import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function UserList() {
  const [users] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+91 9876543210',
      address: '123 Main St, Mumbai, India',
      applications: 2,
      status: 'active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+91 9876543211',
      address: '456 Park Ave, Delhi, India',
      applications: 1,
      status: 'active',
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          User Management
        </h1>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <ul className="divide-y divide-gray-200">
            {users.map((user) => (
              <li key={user.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <FaUser className="text-gray-500 mr-2" />
                          <p className="text-sm font-medium text-blue-600">
                            {user.name}
                          </p>
                        </div>
                        <div className="ml-2">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {user.status}
                          </span>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <FaEnvelope className="mr-2" />
                            {user.email}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <FaPhone className="mr-2" />
                            {user.phone}
                          </div>
                          <div className="flex items-center text-sm text-gray-500 sm:col-span-2">
                            <FaMapMarkerAlt className="mr-2" />
                            {user.address}
                          </div>
                        </div>
                        <div className="mt-2 flex justify-between items-center">
                          <p className="text-sm text-gray-500">
                            Total Applications: {user.applications}
                          </p>
                          <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserList;