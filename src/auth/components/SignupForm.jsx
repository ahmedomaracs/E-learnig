// SignupForm.jsx - Signup form component with validation
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';

const SignupForm = ({ onSubmit, loading = false }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'student' // Default role
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === 'isLecturer') {
            setFormData(prev => ({ ...prev, role: checked ? 'lecturer' : 'student' }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
            // Clear error when user types
            if (errors[name]) {
                setErrors(prev => ({ ...prev, [name]: '' }));
            }
        }
    };

    const validate = () => {
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        // Confirm password validation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const { confirmPassword, isLecturer, ...submitData } = formData;
            onSubmit(submitData);
        }
    };

    const inputStyle = (fieldName) => ({
        width: '100%',
        padding: '12px 16px',
        borderRadius: '8px',
        border: `1px solid ${errors[fieldName] ? 'var(--error-red)' : 'var(--border-color)'}`,
        fontSize: '14px',
        transition: 'all var(--duration-fast) var(--ease-out)'
    });

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    Full Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={inputStyle('name')}
                    placeholder="Enter your full name"
                    disabled={loading}
                    autoFocus
                />
                {errors.name && (
                    <p className="text-sm mt-1" style={{ color: 'var(--error-red)' }}>
                        {errors.name}
                    </p>
                )}
            </div>

            {/* Email Field */}
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle('email')}
                    placeholder="Enter your email"
                    disabled={loading}
                />
                {errors.email && (
                    <p className="text-sm mt-1" style={{ color: 'var(--error-red)' }}>
                        {errors.email}
                    </p>
                )}
            </div>

            {/* Password Field */}
            <div>
                <label
                    htmlFor="password"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    Password
                </label>
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        style={inputStyle('password')}
                        placeholder="Create a password"
                        disabled={loading}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm"
                        style={{ color: 'var(--text-muted)' }}
                        tabIndex="-1"
                    >
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                </div>
                {errors.password && (
                    <p className="text-sm mt-1" style={{ color: 'var(--error-red)' }}>
                        {errors.password}
                    </p>
                )}
            </div>

            {/* Confirm Password Field */}
            <div>
                <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    Confirm Password
                </label>
                <input
                    type={showPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    style={inputStyle('confirmPassword')}
                    placeholder="Confirm your password"
                    disabled={loading}
                />
                {errors.confirmPassword && (
                    <p className="text-sm mt-1" style={{ color: 'var(--error-red)' }}>
                        {errors.confirmPassword}
                    </p>
                )}
            </div>

            {/* Role Selection - Become an Instructor */}
            <div className="flex items-center space-x-3 p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <input
                    type="checkbox"
                    id="isLecturer"
                    name="isLecturer"
                    checked={formData.role === 'lecturer'}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    style={{ cursor: 'pointer' }}
                />
                <label htmlFor="isLecturer" className="cursor-pointer">
                    <span className="block font-medium" style={{ color: 'var(--text-primary)' }}>
                        I want to teach on E-Learning
                    </span>
                    <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                        Create courses and earn money as an instructor
                    </span>
                </label>
            </div>

            {/* Submit Button */}
            <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full mt-6"
                disabled={loading}
            >
                {loading ? 'Creating account...' : 'Sign Up'}
            </Button>

            {/* Login Link */}
            <p className="text-center text-sm" style={{ color: 'var(--text-secondary)' }}>
                Already have an account?{' '}
                <Link
                    to="/login"
                    className="font-semibold hover:underline"
                    style={{ color: 'var(--brand-primary)' }}
                >
                    Login
                </Link>
            </p>
        </form>
    );
};

export default SignupForm;
