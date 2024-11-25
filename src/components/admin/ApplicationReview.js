import { useState } from 'react';
import { FaCheck, FaTimes, FaEye } from 'react-icons/fa';

function ApplicationReview() {
  const [applications] = useState([
    {
      id: 1,
      user: 'John Doe',
      loanType: 'Personal Loan',
      amount: 50000,
      status: 'pending',
      date: '2024-03-15',
    },
    {
      id: 2,
      user: 'Jane Smith',
      loanType: 'Home Loan',
      amount: 2000000,
      status: 'pending',
      date: '2024-03-14',
    },
  ]);

  const handleViewDocuments = (id) => {
    // Handle viewing documents
  };

  const handleApprove = (id) => {
    // Handle approval
  };

  const handleReject = (id) => {
    // Handle rejection
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Loan Applications Review
        </h1>

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {applications.map((application) => (
              <li key={application.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-blue-600 truncate">
                          {application.user}
                        </p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            {application.status}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 flex justify-between">
                        <div>
                          <p className="flex items-center text-sm text-gray-500">
                            {application.loanType}
                          </p>
                          <p className="mt-1 flex items-center text-sm text-gray-500">
                            ₹{application.amount.toLocaleString()}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleViewDocuments(application.id)}
                            className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                          >
                            <FaEye className="mr-2" />
                            View Docs
                          </button>
                          <button
                            onClick={() => handleApprove(application.id)}
                            className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                          >
                            <FaCheck className="mr-2" />
                            Approve
                          </button>
                          <button
                            onClick={() => handleReject(application.id)}
                            className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                          >
                            <FaTimes className="mr-2" />
                            Reject
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

export default ApplicationReview;