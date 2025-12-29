// Navbar Component
// Main navigation bar with logo, links, search, and auth

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../common/Container';

const Navbar = ({ user, onLogout }) => {
    const navigate = useNavigate();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'All Courses', path: '/catalog' },
        ...(user && user.role !== 'lecturer' ? [{ name: 'My Learning', path: '/my-courses' }] : []),
        ...(user?.role === 'lecturer' ? [{ name: 'Dashboard', path: '/lecturer/dashboard' }] : []),
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
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
                        className="text-2xl font-bold hover:opacity-80 transition"
                        style={{ color: 'var(--brand-primary)' }}
                    >
                        E-Learning
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
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={() => navigate('/login')}
                                    className="px-4 py-2 text-sm font-medium"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    Login
                                </button>
                                <button
                                    onClick={() => navigate('/signup')}
                                    className="px-4 py-2 rounded-lg text-sm font-semibold"
                                    style={{
                                        backgroundColor: 'var(--brand-primary)',
                                        color: 'white'
                                    }}
                                >
                                    Sign Up
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
