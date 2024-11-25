import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLogin from './components/auth/UserLogin';
import UserRegister from './components/auth/UserRegister';
import AdminLogin from './components/auth/AdminLogin';
import UserDashboard from './components/user/UserDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import LoanApplication from './components/user/LoanApplication';
import ApplicationStatus from './components/user/ApplicationStatus';
import ApplicationReview from './components/admin/ApplicationReview';
import UserList from './components/admin/UserList';
import LandingPage from './components/LandingPage';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        
        {/* Protected User Routes */}
        <Route path="/user/*" element={<ProtectedRoute allowedRoles={['user']} />}>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="apply" element={<LoanApplication />} />
          <Route path="status" element={<ApplicationStatus />} />
        </Route>

        {/* Protected Admin Routes */}
        <Route path="/admin/*" element={<ProtectedRoute allowedRoles={['naiduearle2662@gmail.com']} />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="applications" element={<ApplicationReview />} />
          <Route path="users" element={<UserList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;