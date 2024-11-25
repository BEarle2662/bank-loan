import { Link } from 'react-router-dom';
import { FaUsers, FaFileAlt, FaChartBar } from 'react-icons/fa';

function AdminDashboard() {
  const stats = [
    { name: 'Total Applications', stat: '24', icon: FaFileAlt, color: 'blue' },
    { name: 'Pending Review', stat: '12', icon: FaChartBar, color: 'yellow' },
    { name: 'Total Users', stat: '48', icon: FaUsers, color: 'green' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-blue-600">Admin Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center">
              <button className="px-4 py-2 text-sm text-gray-700 hover:text-gray-500">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
          {stats.map((item) => (
            <div
              key={item.name}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <item.icon
                      className={`h-6 w-6 text-${item.color}-600`}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {item.name}
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        {item.stat}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          <Link
            to="/admin/applications"
            className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FaFileAlt className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">
                    Review Applications
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Review and process pending loan applications
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link
            to="/admin/users"
            className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FaUsers className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">
                    Manage Users
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    View and manage user accounts
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;