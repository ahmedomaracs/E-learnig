// SignupForm.jsx - Signup form component with validation
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../../components/common/Button';

const SignupForm = ({ onSubmit, loading = false }) => {
    const { t, i18n } = useTranslation();
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
            newErrors.name = t('fullName') + ' is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = t('fullName') + ' must be at least 2 characters';
        }

        // Email validation
        if (!formData.email) {
            newErrors.email = t('email') + ' is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = t('email') + ' is invalid';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = t('password') + ' is required';
        } else if (formData.password.length < 6) {
            newErrors.password = t('password') + ' must be at least 6 characters';
        }

        // Confirm password validation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = t('confirmPassword') + ' is required';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match'; // Needs key
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
                    {t('fullName')}
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={inputStyle('name')}
                    placeholder={t('fullName')}
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
                    {t('email')}
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle('email')}
                    placeholder={t('email')}
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
                    {t('password')}
                </label>
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        style={inputStyle('password')}
                        placeholder={t('password')}
                        disabled={loading}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm"
                        style={{ color: 'var(--text-muted)' }}
                        tabIndex="-1"
                    >
                        {showPassword ? (i18n.language === 'ar' ? 'إخفاء' : 'Hide') : (i18n.language === 'ar' ? 'إظهار' : 'Show')}
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
                    {t('confirmPassword')}
                </label>
                <input
                    type={showPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    style={inputStyle('confirmPassword')}
                    placeholder={t('confirmPassword')}
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
                        {t('teachOnApp')}
                    </span>
                    <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                        {t('instructorSubtext')}
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
                {loading ? t('signupButton') + '...' : t('signupButton')}
            </Button>

            {/* Login Link */}
            <p className="text-center text-sm" style={{ color: 'var(--text-secondary)' }}>
                {t('alreadyHaveAccount')}{' '}
                <Link
                    to="/login"
                    className="font-semibold hover:underline"
                    style={{ color: 'var(--brand-primary)' }}
                >
                    {t('login')}
                </Link>
            </p>
        </form>
    );
};

export default SignupForm;
