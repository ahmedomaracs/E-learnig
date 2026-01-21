// LoginForm.jsx - Login form component with validation
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../../components/common/Button';

const LoginForm = ({ onSubmit, loading = false }) => {
    const { t, i18n } = useTranslation();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};

        // Email validation
        if (!formData.email) {
            newErrors.email = t('email') + ' is required'; // Ideally add specific validation keys
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = t('email') + ' is invalid';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = t('password') + ' is required';
        } else if (formData.password.length < 6) {
            newErrors.password = t('password') + ' must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(formData);
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
        <form onSubmit={handleSubmit} className="space-y-5">
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
                    autoFocus
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

            {/* Submit Button */}
            <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={loading}
            >
                {loading ? t('loginButton') + '...' : t('loginButton')}
            </Button>

            {/* Signup Link */}
            <p className="text-center text-sm" style={{ color: 'var(--text-secondary)' }}>
                {t('dontHaveAccount')}{' '}
                <Link
                    to="/signup"
                    className="font-semibold hover:underline"
                    style={{ color: 'var(--brand-primary)' }}
                >
                    {t('signupButton')}
                </Link>
            </p>
        </form>
    );
};

export default LoginForm;
