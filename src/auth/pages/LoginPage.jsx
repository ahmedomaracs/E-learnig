// LoginPage.jsx - Login page with form and error handling
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../context/AuthContext';
import * as authService from '../services/authService';

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Get the page user was trying to visit (or default to home)
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = async (credentials) => {
        setLoading(true);
        setError('');

        try {
            // Call auth service
            const userData = await authService.login(credentials);

            // Update auth context
            login(userData);

            // Redirect to intended page or home
            navigate(from, { replace: true });
        } catch (err) {
            setError(err.message || 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout
            title="Welcome Back"
            subtitle="Login to continue your learning journey"
        >
            {/* Error Message */}
            {error && (
                <div
                    className="mb-4 p-3 rounded-lg text-sm"
                    style={{
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        color: 'var(--error-red)',
                        border: '1px solid var(--error-red)'
                    }}
                >
                    {error}
                </div>
            )}

            <LoginForm onSubmit={handleSubmit} loading={loading} />
        </AuthLayout>
    );
};

export default LoginPage;
