// Navbar Component
// Main navigation bar with logo, links, search, and auth

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from '../common/Container';
import LanguageSwitcher from '../LanguageSwitcher';

const Navbar = ({ user, onLogout }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const navLinks = [
        { name: t('home'), path: '/' },
        { name: t('allCourses'), path: '/catalog' },
        ...(user && user.role !== 'lecturer' ? [{ name: t('myLearning'), path: '/my-courses' }] : []),
        ...(user?.role === 'lecturer' ? [{ name: t('dashboard'), path: '/lecturer/dashboard' }] : []),
        { name: t('about'), path: '/about' },
        { name: t('contact'), path: '/contact' }
    ];

    return (
        <nav
            className="bg-white shadow-sm sticky top-0 z-50"
            style={{ borderBottom: '1px solid var(--border-light)' }}
        >
            <Container>
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="hover:opacity-80 transition"
                        style={{ color: 'var(--brand-primary)' }}
                    >
                        <span className={`text-2xl font-extrabold tracking-wide ${t('lang') === 'ar' ? 'font-brand' : 'font-sans'}`}>
                            {t('brandName', 'EduAcademy')}
                        </span>
                    </Link>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:flex gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-sm font-medium"
                                style={{
                                    color: 'var(--text-secondary)',
                                    transition: 'color var(--duration-fast) var(--ease-out)'
                                }}
                                onMouseEnter={(e) => (e.target.style.color = 'var(--brand-primary)')}
                                onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Auth Section */}
                    <div className="flex items-center gap-3">
                        <LanguageSwitcher />
                        {user ? (
                            <>
                                <span className="text-sm hidden sm:block" style={{ color: 'var(--text-muted)' }}>
                                    {user.email}
                                </span>
                                <button
                                    onClick={onLogout}
                                    className="px-4 py-2 rounded-lg text-sm font-semibold"
                                    style={{
                                        backgroundColor: 'var(--brand-primary)',
                                        color: 'white',
                                        transition: 'all var(--duration-fast) var(--ease-out)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 8px 20px -5px rgba(37, 99, 235, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                >
                                    {t('logout')}
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={() => navigate('/login')}
                                    className="px-4 py-2 text-sm font-medium"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    {t('login')}
                                </button>
                                <button
                                    onClick={() => navigate('/signup')}
                                    className="px-4 py-2 rounded-lg text-sm font-semibold"
                                    style={{
                                        backgroundColor: 'var(--brand-primary)',
                                        color: 'white'
                                    }}
                                >
                                    {t('signupButton')}
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
