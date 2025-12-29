// LecturerRoute.jsx - Protected route for lecturer-only pages
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LecturerRoute = ({ children }) => {
    const { user, isAuthenticated, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl">Loading...</div>
            </div>
        );
    }

    // Check if authenticated AND has lecturer role
    if (!isAuthenticated || user?.role !== 'lecturer') {
        // If authenticated but not lecturer, redirect to home (or student dashboard)
        if (isAuthenticated) {
            return <Navigate to="/" replace />;
        }
        // If not authenticated, redirect to login
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default LecturerRoute;
