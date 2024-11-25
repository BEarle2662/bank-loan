import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ allowedRoles }) {
  const { user } = useAuth();
  console.log("User", user.email)

  if (!user) {
    return <Navigate to={`/user/login`} replace />;
  }

    // Redirect to their home page if the role doesn't match
    // if (!allowedRoles.includes(user.role)) {
    //   const homePage = user.email === "admin" ? '/admin/dashboard' : '/user/dashboard';
    //   return <Navigate to={homePage} replace />;
    // }

    if(allowedRoles.includes(user.email)){
      <Navigate to='/admin/dashboard' replace />;
    }else{
      <Navigate to='/user/dashboard' replace />;
    }

  return <Outlet />;
}

export default ProtectedRoute;