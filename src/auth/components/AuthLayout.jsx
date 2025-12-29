// AuthLayout.jsx - Layout wrapper for auth pages
import React from 'react';

const AuthLayout = ({ children, title, subtitle }) => {
    return (
        <div
            className="min-h-screen flex items-center justify-center p-4"
            style={{ backgroundColor: 'var(--bg-main)' }}
        >
            <div
                className="bg-white rounded-2xl shadow-xl p-8 w-full"
                style={{ maxWidth: '450px', border: '1px solid var(--border-light)' }}
            >
                {/* Header */}
                <div className="text-center mb-8">
                    <h1
                        className="text-3xl font-bold mb-2"
                        style={{ color: 'var(--brand-primary)' }}
                    >
                        E-Learning
                    </h1>
                    <h2
                        className="text-2xl font-bold mb-2"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        {title}
                    </h2>
                    {subtitle && (
                        <p style={{ color: 'var(--text-secondary)' }}>
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* Content */}
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
