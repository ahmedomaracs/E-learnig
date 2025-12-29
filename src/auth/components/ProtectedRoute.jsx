// ProtectedRoute.jsx - Route wrapper for authenticated-only pages
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();
    const location = useLocation();

    // Show nothing while checking auth status
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--bg-main)' }}>
                <div className="text-center">
                    <div className="text-2xl font-bold mb-2" style={{ color: 'var(--brand-primary)' }}>
                        Loading...
                    </div>
                    <p style={{ color: 'var(--text-muted)' }}>Please wait</p>
                </div>
            </div>
        );
    }

    // Redirect to login if not authenticated
    // Save the attempted location to redirect back after login
    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;
