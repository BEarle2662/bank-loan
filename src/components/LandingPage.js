import { Link } from 'react-router-dom';
import { FaUserCircle, FaUserShield } from 'react-icons/fa';

function LandingPage() {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Bank Loan Management System
          </h1>
          <p className="text-xl text-blue-700">
            Streamlined loan processing for a better banking experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* User Portal */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <FaUserCircle className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              User Portal
            </h2>
            <p className="text-gray-600 mb-6">
              Apply for loans and track your applications
            </p>
            <div className="space-x-4">
              <Link
                to="/user/login"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Login
              </Link>
              <Link
                to="/user/register"
                className="inline-block border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Admin Portal */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <FaUserShield className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Admin Portal
            </h2>
            <p className="text-gray-600 mb-6">
              Manage loan applications and user accounts
            </p>
            <Link
              to="/admin/login"
              className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;