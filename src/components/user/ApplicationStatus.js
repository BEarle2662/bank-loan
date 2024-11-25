import { useState } from "react";
import {
  FaFileAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
} from "react-icons/fa";

function ApplicationStatus() {
  const [applications] = useState([
    {
      id: 1,
      loanType: "Personal Loan",
      amount: 50000,
      status: "pending",
      date: "2024-03-15",
      documents: ["PAN Card", "Aadhar Card", "Bank Statement"],
    },
    {
      id: 2,
      loanType: "Home Loan",
      amount: 2000000,
      status: "approved",
      date: "2024-03-10",
      documents: ["PAN Card", "Aadhar Card", "Property Documents"],
    },
  ]);

  const getStatusIcon = (status) => {
    switch (status) {
      case "approved":
        return <FaCheckCircle className="text-green-500" />;
      case "rejected":
        return <FaTimesCircle className="text-red-500" />;
      default:
        return <FaClock className="text-yellow-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Your Applications
        </h1>

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200 ">
            {applications.map((application) => (
              <li key={application.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <FaFileAlt className="text-blue-500 mr-2" />
                          <p className="text-sm font-medium text-blue-600">
                            {application.loanType}
                          </p>
                        </div>
                        <div className="ml-2 flex items-center">
                          {getStatusIcon(application.status)}
                          <span className="ml-2 text-sm capitalize text-gray-500">
                            {application.status}
                          </span>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="flex justify-between text-sm text-gray-500">
                          <div>
                            <p>
                              Amount: ₹{application.amount.toLocaleString()}
                            </p>
                            <p>Applied on: {application.date}</p>
                          </div>
                          <div className="text-right">
                            <p>Documents Submitted:</p>
                            <p className="text-xs">
                              {application.documents.join(", ")}
                            </p>
                          </div>
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

export default ApplicationStatus;
