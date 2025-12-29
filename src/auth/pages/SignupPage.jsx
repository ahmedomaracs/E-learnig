// SignupPage.jsx - Signup page with form and error handling
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import SignupForm from '../components/SignupForm';
import { useAuth } from '../context/AuthContext';
import * as authService from '../services/authService';

const SignupPage = () => {
    const navigate = useNavigate();
    const { signup } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (userData) => {
        setLoading(true);
        setError('');

        try {
            // Call auth service
            const newUser = await authService.signup(userData);

            // Update auth context (auto-login)
            signup(newUser);

            // Redirect to home
            navigate('/', { replace: true });
        } catch (err) {
            setError(err.message || 'Signup failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout
            title="Create Account"
            subtitle="Join thousands of learners today"
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

            <SignupForm onSubmit={handleSubmit} loading={loading} />
        </AuthLayout>
    );
};

export default SignupPage;
